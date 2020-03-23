import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';
import Header from './Header'
import SideMenu from './SideMenu'
import Drawer from 'react-native-drawer'

class MenuBar extends React.Component{

    state = {
        drawerOpen: true
    }

    toggleDrawer(){
        this.setState({drawerOpen: !this.state.drawerOpen})
    }

    render(){
        return(
            <View style={{margin: 20, flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: '#bdd9ff'}}>
                {/* <Drawer
                    open={this.state.drawerOpen}
                    type="static"
                    tapToClose={true}
                    openDrawerOffset={0.5}
                    closedDrawerOffset={0}
                    content={<SideMenu />}
                    // styles={styles.drawerStyles}
                    tweenHandler={Drawer.tweenPresets.parallax}
                    tweenEasing={"easeInOutQuad"}
                    tweenDuration={400}
                    onClose={this.closeDrawer}
                >
                    <View>
                        <Header title="Home" toggleDrawer={this.toggleDrawer}/>
                    </View>
                </Drawer> */}
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
            </View>
        )
    }
}

export default MenuBar;