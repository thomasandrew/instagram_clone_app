import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
} from 'react-native'
import Stories from './Stories'
import Pictures from './Pictures'

export default class App extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.logo}>
                        Instagram
                    </Text>
                </View>
                <View style={styles.stories}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <Stories users={'https://randomuser.me/api/portraits/men/1.jpg'} name="John" />
                        <Stories users={'https://randomuser.me/api/portraits/women/3.jpg'} name="Suzie" />
                        <Stories users={'https://randomuser.me/api/portraits/men/4.jpg'} name="John" />
                        <Stories users={'https://randomuser.me/api/portraits/men/5.jpg'} name="John" />
                        <Stories users={'https://randomuser.me/api/portraits/women/5.jpg'} name="Ashley" />
                        <Stories users={'https://randomuser.me/api/portraits/men/7.jpg'} name="John" />
                        <Stories users={'https://randomuser.me/api/portraits/women/8.jpg'} name="Rose" />
                    </ScrollView>
                </View>
                <View style={{ borderBottomColor: '#ddd', borderBottomWidth: 1, marginTop: 3 }} />
                <View>
                    <Pictures imgUs={'https://randomuser.me/api/portraits/men/1.jpg'} nameofU='John' imgM={'https://clo.ng/img/2018/08/desk.JPG'}/>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    header: {
        backgroundColor: '#fff',
        height: 70,
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    logo: {
        fontFamily: 'Arial',
        fontSize: 18,
        marginLeft: 67,
        marginTop: 20,
    },
})


