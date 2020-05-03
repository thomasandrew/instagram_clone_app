import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native'
import Stories from './Stories'
import Pictures from './Pictures'

export default class App extends Component {
    render() {
        return (
            <View>
                <View style={styles.likes}>
                    <Text>{this.props.likes}</Text>
                </View>
                <View>
                    <Text style={styles.bold}> {this.props.names} </Text>
                    <Text style={styles.post}> {this.props.write} </Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text style={styles.comments}> View all {this.props.num} comments </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    likes: {
        marginLeft: 10,
        marginTop: 8,
        fontFamily: 'Verdana',
    },
    bold: {
        fontWeight: 'bold',
        marginLeft: 5,
        marginTop: 3,
    },
    post: {
        marginLeft: 10 + 35,
        marginTop: -19,
    },
    comments: {
        marginLeft: 5,
        marginTop: 5,
        color: 'grey',
    },
})


