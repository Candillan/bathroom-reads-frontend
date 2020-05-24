import React from 'react';
import { View, Text } from 'react-native';
import Post from '../components/Post';

class PostFeed extends React.Component {

    state = {
        posts: null,
        postView: null,
        liked: false
    }

    componentDidMount(){
        fetch(`http://localhost:3000/posts/filter/${this.props.user.id}`)
        .then(response => response.json())
        .then(posts => {
            console.log(posts)
            if(posts.length > 0){
                this.setState({ posts: posts })
            }
        })
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

    addLike = (id) => {
        console.log("hitting like function")
        fetch(`http://localhost:3000/post_views/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'},
            body: JSON.stringify({ 
                user_id: this.props.user.id,
                post_id: id,
                like: true
            })
        })
        .then(response => response.json())
        .then((postView) => {this.setState({liked: !this.state.liked, postView: postView.id})})
    }

    removeLike = () => {
        console.log("hitting unlike function")
        fetch(`http://localhost:3000/post_views/${this.state.postView}`, {method: 'DELETE'})
        .then(() => {this.setState({liked: !this.state.liked, postView: null})})
    }

    nextPost = () => {
        const newArray = this.state.posts.slice(1)
        this.setState({ posts: newArray, liked: false, postView: null })
    }

    render(){
        return (
            <View style={{ marginTop: 12,
                padding: 12,
                borderRadius: 8,
                color: "#a9d7db",
                backgroundColor: "#5eb6bd"}}>
                {this.state.posts && this.state.posts.length > 0 ? <Post post={this.state.posts[0]} nextPost={this.nextPost} like={this.addLike} removeLike={this.removeLike} liked={this.state.liked} /> : <Text>No posts found! If you have no categories selected, this may be why. Please go to Profile to add some! Alternatively, perhaps you've reached the end of the content avaiable!</Text>}
            </View>
        )
    }
}

export default PostFeed;