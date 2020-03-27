import React from 'react';
import { View, Text, Button } from 'react-native';

const Post = (props) => {
    console.log(props.post)
    return (
        <View>
            {/* {props.post ? <Text style={{fontSize: 25}}>{props.post.id}</Text> : null} */}
            <View>
                <Text style={{color: 'red', fontWeight: "bold"}}>[{props.post.category.name}]</Text>
                <Text style={{fontSize: 30, fontWeight: "bold"}}>{props.post.title}</Text>
                <Text style={{fontSize: 18, fontStyle: "italic"}}>{props.post.content}</Text>
                <Text style={{color: '#8b3da1', fontWeight: "bold"}}>Likes: {props.liked ? props.post.post_views.length + 1 : props.post.post_views.length }</Text>
            </View>

            <View style={{margin: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
                {props.liked ? <Button title={"Unlike"} color="#ff5eb7" onPress={() => props.removeLike()}/> : <Button title={"Like"} color="#ff5eb7" onPress={() => props.like(props.post.id)}/> }
                <Button title={"Next Post"} onPress={() => props.nextPost()} color="#841584"/>
            </View>
        </View>
    )
}

export default Post;