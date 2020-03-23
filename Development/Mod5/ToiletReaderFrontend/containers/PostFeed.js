import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList
} from 'react-native';
import Post from '../components/Post';

class PostFeed extends React.Component {

    state = {
        posts: null,
        postView: null
    }

    componentDidMount(){
        fetch(`http://localhost:3000/posts/filter/${this.props.user.id}`)
        .then(response => response.json())
        .then(posts => this.setState({ posts: posts }))
        // fetch(`http://localhost:3000/posts/${this.props.post.id}`)
        // .then(response => response.json())
        // .then(post => this.setState({post: post}))
    }

    viewPost = () => {
        fetch('http://localhost:3000/post_views', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'},
            body: JSON.stringify({ 
                user_id: this.props.user.id,
                post_id: this.props.post[0].id,
                like: false
            })
        })
        .then(response => response.json())
        .then(postView => this.setState({postView: postView}))
    }

    addLike = () => {
        fetch(`http://localhost:3000/post_views/${postView.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'},
            body: JSON.stringify({ 
                like: true
            })
        })
    }

    nextPost = () => {
        const newArray = this.state.posts.slice(1)
        this.setState({ posts: newArray})
    }

    render(){
        console.log(this.state.post)
        // this.viewPost()
        return (
            <View>
                <Text style={{fontSize: 30, fontWeight: "bold"}}>Post Feed</Text>
                <Post post={this.state.post} nextPost={this.nextPost}/>
            </View>
        )
    }
}

export default PostFeed;