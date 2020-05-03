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
import Like from './Like'

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
                        <Stories users={'https://randomuser.me/api/portraits/men/4.jpg'} name="Julius" />
                        <Stories users={'https://randomuser.me/api/portraits/men/5.jpg'} name="Jake" />
                        <Stories users={'https://randomuser.me/api/portraits/women/5.jpg'} name="Ashley" />
                        <Stories users={'https://randomuser.me/api/portraits/men/7.jpg'} name="Leon" />
                        <Stories users={'https://randomuser.me/api/portraits/women/8.jpg'} name="Rose" />
                        <Stories users={'https://randomuser.me/api/portraits/women/17.jpg'} name="julie" />
                        <Stories users={'https://randomuser.me/api/portraits/men/18.jpg'} name="j_po" />
                    </ScrollView>
                </View>
                <View style={{ borderBottomColor: '#ddd', borderBottomWidth: 1, marginTop: 3 }} />
                <View>
                    <Pictures imgUs={'https://randomuser.me/api/portraits/men/1.jpg'} nameofU='John' imgM={'https://clo.ng/img/2018/08/desk.JPG'} />
                </View>
                <View style={styles.likes}>
                    <Like likes='3 likes' names='John' write='My first post.' num={30} />
                </View>

                <View style={styles.posting}>
                    <View>
                        <Pictures imgUs={'https://randomuser.me/api/portraits/women/10.jpg'} nameofU='Lara' imgM={'https://therightsofnature.org/wp-content/uploads/2018/01/turkey-3048299_1920.jpg'} />
                    </View>
                    <View style={styles.likes}>
                        <Like likes='2 likes' names='Lara' write='I love nature.' num={3} />
                    </View>
                </View>

                <View style={styles.posting}>
                    <View>
                        <Pictures imgUs={'https://randomuser.me/api/portraits/men/10.jpg'} nameofU='Jack' imgM={'data:image/jpeg;base64,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'} />
                    </View>
                    <View style={styles.likes}>
                        <Like likes='20 likes' names='Jack' write='I bought a new car.' num={16} />
                    </View>
                </View>

                <View style={styles.posting}>
                    <View>
                        <Pictures imgUs={'https://randomuser.me/api/portraits/women/8.jpg'} nameofU='Rose' imgM={'https://upload.wikimedia.org/wikipedia/commons/e/e5/Statue_of_Liberty_from_front.jpg'} />
                    </View>
                    <View style={styles.likes}>
                        <Like likes='15 likes' names='Rose' write="I'm in New York." num={7} />
                    </View>
                </View>

                <View style={styles.posting}>
                    <View>
                        <Pictures imgUs={'https://randomuser.me/api/portraits/women/12.jpg'} nameofU='julia' imgM={'https://i.pinimg.com/originals/88/5b/b4/885bb4e6d80f92108693e33fd450204a.jpg'} />
                    </View>
                    <View style={styles.likes}>
                        <Like likes='5 likes' names='julia' write="I'm just studing." num={1} />
                    </View>
                </View>

                <View style={styles.posting}>
                    <View>
                        <Pictures imgUs={'https://randomuser.me/api/portraits/men/5.jpg'} nameofU='Jake' imgM={'https://i.pinimg.com/736x/bd/95/74/bd95742f60f17031e6e10d873ad6289a.jpg'} />
                    </View>
                    <View style={styles.likes}>
                        <Like likes='10 likes' names='Jake' write="Netflix and chill." num={3} />
                    </View>
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
    posting: {
        marginTop: 12,
    },
})


