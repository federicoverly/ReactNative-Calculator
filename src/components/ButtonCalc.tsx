import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

interface Props {
    text: string,
    color?:  string,
    width?: boolean,
    action: ( numberText :string ) => void,
}

export const ButtonCalc = ( { text, color = '#2D2D2D', width = false, action} : Props) => {
    return (
        <TouchableOpacity onPress={ () => action(text)}>
            <View style={ {...styles.button, backgroundColor: color,
            width: (width) ? 180 : 80}}>
                <Text style={{...styles.buttonText, 
                color: (color == '#9B9B9B') ? 'black' : 'white'}}>{text}</Text>
            </View>     
        </TouchableOpacity>    
    )
}

const styles = StyleSheet.create({
    button: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
        backgroundColor:'#2D2D2D'
    },
    buttonText:{
        textAlign: 'center',
        fontSize: 30,
        padding: 10,
        fontWeight: '300',
        color: 'white'
    }
})
