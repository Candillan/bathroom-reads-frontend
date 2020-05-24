import React from 'react';
import { View, Button } from 'react-native';

const InterestButton = (props) => {
    const match = props.interests.find(interest => interest.category_id === props.category.id)
    return (
        <View>
            {match ? <Button title={`Remove ${props.category.name}`} onPress={() => props.removeCategory(match.id)} color={'#ff0d00'}/> : <Button title={`Add ${props.category.name}`} onPress={() => props.addCategory(props.category.id)}/>}
        </View>
    )
}

export default InterestButton;