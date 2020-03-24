import React from 'react';
import { View, Text, Button } from 'react-native';

const Post = (props) => {
    console.log(props.post)
    return (
        <View>
            {/* {props.post ? <Text style={{fontSize: 25}}>{props.post.id}</Text> : null} */}
            <View><Text>[{props.post.category.name}] Title: {props.post.title}</Text><Text>Content: {props.post.content}</Text></View>
            <View style={{margin: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Button title={"Like"} color="#ff5eb7"/> 
                <Button title={"Next Post"} onPress={() => props.nextPost()} color="#841584"/>
            </View>
        </View>
    )
}

export default Post;