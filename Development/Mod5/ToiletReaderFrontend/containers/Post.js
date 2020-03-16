import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const Post = (props) => {
    console.log(props.post)
    return (
        <View>
            <Text>{props.post.title}</Text>
            <Text>{props.post.content}</Text>
            <Text>---------------</Text>
        </View>
    )
}

export default Post;