import React from 'react';
import { View, Text } from 'react-native';
import InterestContainer from '../containers/InterestContainer'

class ProfileView extends React.Component {
    render(){
        return (
            <View style={{ marginTop: 12,
                padding: 12,
                borderRadius: 8,
                color: "#a9d7db",
                backgroundColor: "#5eb6bd"}}>
                <Text style={{fontSize: 25, fontWeight: "bold"}}>Profile</Text>
                <Text style={{fontSize: 18}}>Username: {this.props.user.username}</Text>
                <Text style={{fontSize: 18}}>Handle: {this.props.user.handle}</Text>
                <Text style={{fontSize: 16}}>Categories:</Text>
                <InterestContainer user={this.props.user}/>
            </View>
        )
    }
}

export default ProfileView;