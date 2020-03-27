import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import TestEnvironment from './TestEnvironment'
import Login from './components/Login'
import PostFeed from './containers/PostFeed'
import ProfileView from './containers/ProfileView'
import MenuBar from './components/MenuBar'

class App extends React.Component {
  state = {
    currentUser: {},
    loggedIn: false,
    view: null
    // posts: []
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
    // console.log(this.state.currentUser)
    return (
      <>
        <View style={{flex: 1, backgroundColor: '#d1ebed'}}>
          {this.state.loggedIn ? <MenuBar logOut={this.logOut} changeView={this.changeView}/> : <Login logIn={this.logIn}/>}
          <View style={styles.sectionContainer}>
            {/* <View><Text>Text</Text></View> */}
            {/* {this.state.view === "feed" ? <PostFeed user={this.state.currentUser} post={this.state.posts} nextPost={this.nextPost}/> : null } */}
            {this.state.view === "feed" ? <PostFeed user={this.state.currentUser} nextPost={this.nextPost}/> : null }
            {this.state.view === "profile" ? <ProfileView user={this.state.currentUser}/> : null }
          </View>
        </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  // scrollView: {
  //   backgroundColor: Colors.lighter,
  // },
  // engine: {
  //   position: 'absolute',
  //   right: 0,
  // },
  // body: {
  //   backgroundColor: Colors.white,
  // },
  sectionContainer: {
    marginTop: 33,
    paddingHorizontal: 24
  },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  //   color: Colors.black,
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  //   color: Colors.dark,
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
  // footer: {
  //   color: Colors.dark,
  //   fontSize: 12,
  //   fontWeight: '600',
  //   padding: 4,
  //   paddingRight: 12,
  //   textAlign: 'right',
  // },
});

export default App;
