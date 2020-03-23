import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

class Header extends React.Component{

    onHamburgerClick(){
        this.props.toggleDrawer();
    }

    render(){
        console.log("hitting header")
        return(
            <View>
                <View>
                    <TouchableOpacity onPress={this.onHamburgerClick}>
                        <Text>Menu</Text>
                    </TouchableOpacity>
                </View>
                <Text>{this.props.title}</Text>
            </View>
        )
    }
}

export default Header;