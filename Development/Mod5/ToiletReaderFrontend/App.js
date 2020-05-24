import React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './components/Login'
import PostFeed from './containers/PostFeed'
import ProfileView from './containers/ProfileView'
import MenuBar from './components/MenuBar'

class App extends React.Component {
  state = {
    currentUser: {},
    loggedIn: false,
    view: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(users => this.setState({ currentUser: users[0]}))
  }

  changeView = (input) => {
    this.setState({ view: input })
  }

  logOut = () => {
    this.setState({loggedIn: false, view: null})
  }

  logIn = () => {
    this.setState({loggedIn: true, view: "feed"})
  }


  render() {
    return (
      <>
        <View style={{flex: 1, backgroundColor: '#d1ebed'}}>
          {this.state.loggedIn ? <MenuBar logOut={this.logOut} changeView={this.changeView}/> : <Login logIn={this.logIn}/>}
          <View style={styles.sectionContainer}>
            {this.state.view === "feed" ? <PostFeed user={this.state.currentUser} nextPost={this.nextPost}/> : null }
            {this.state.view === "profile" ? <ProfileView user={this.state.currentUser}/> : null }
          </View>
        </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 33,
    paddingHorizontal: 24
  }
});

export default App;
