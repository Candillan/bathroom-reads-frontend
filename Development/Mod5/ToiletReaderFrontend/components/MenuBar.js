import React from 'react';
import { View, Button } from 'react-native';

class MenuBar extends React.Component{
    render(){
        return(
            <View style={{height: 80, backgroundColor: '#bdd9ff'}}>
                <View style={{marginTop: 40, flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: '#bdd9ff', alignItems: 'stretch'}}>
                    <Button
                        onPress={() => {
                            this.props.changeView("profile");
                        }}
                        title="Profile"
                    />
                    <Button
                        onPress={() => {
                            this.props.changeView("feed");
                        }}
                        title="Feed"
                    />
                    <Button onPress={() => {this.props.logOut()}} title="Log Out"/>
                </View>
            </View>
        )
    }
}

export default MenuBar;