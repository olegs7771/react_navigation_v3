import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class DetailScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Detail </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center"
    }
})
