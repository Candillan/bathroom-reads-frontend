import React from 'react';
import { View, Text, Button } from 'react-native';

const InterestButton = (props) => {
    // console.log(props)
    const match = props.interests.find(interest => interest.category_id === props.category.id)
    // console.log(match)
    return (
        <View>
            {match ? <Button title={`Remove ${props.category.name}`} onPress={() => props.removeCategory(match.id)} color={'#ff0d00'}/> : <Button title={`Add ${props.category.name}`} onPress={() => props.addCategory(props.category.id)}/>}
        </View>
    )
}

export default InterestButton;