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

class SideMenu extends React.Component{
    render(){
        return(
            <View>
                <TouchableOpacity>
                    <View>
                        <Text>Profile</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View>
                        <Text>Post Feed</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View>
                        <Text>Log Out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default SideMenu;