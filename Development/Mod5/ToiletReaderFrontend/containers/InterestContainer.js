import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList
} from 'react-native';
import InterestButton from '../components/InterestButton'
// import Post from '../components/Post';

class InterestContainer extends React.Component {

    state = {
        categories: [],
        interests: []
    }

    componentDidMount(){
        fetch(`http://localhost:3000/categories`)
        .then(response => response.json())
        .then(categories => this.setState({categories: categories}))
        fetch(`http://localhost:3000/users/${this.props.user.id}/interests`)
        .then(response => response.json())
        .then(interests => this.setState({interests: interests}))
    }

    addCategory = (catID) => {
        // console.log("adding", catID)
        const body = {category_id: catID, user_id: this.props.user.id}
        fetch('http://localhost:3000/interests',{
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(interest => {
            // console.log(interest)
            this.state.interests.push(interest)
            const newArray = this.state.interests
            this.setState({interests: newArray})
        })
    }

    removeCategory = (interestID) => {
        // console.log("removing", interestID)
        const newArray = this.state.interests.filter(interest => interest.id !== interestID)
        fetch(`http://localhost:3000/interests/${interestID}`, { method: "DELETE" })
        .then(this.setState({interests: newArray}))
    }

    render(){
        // console.log(this.props.user)
        return (
            <View style={{margin: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
                <FlatList 
                    data={this.state.categories} 
                    renderItem={(category) => <InterestButton category={category.item} interests={this.state.interests} addCategory={this.addCategory} removeCategory={this.removeCategory}/>} 
                    keyExtractor={category => category.id}
                />
            </View>
        )
    }
}

export default InterestContainer;