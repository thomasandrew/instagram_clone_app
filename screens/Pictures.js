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
import { Icon } from 'react-native-elements'

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            iconSwitch: 'heart-o',
            iconColor: 'black',
            iconSwitch2: 'bookmark-o',
        }
    }

    render() {

        iconPress = () => {
            if (this.state.iconSwitch === 'heart-o' && this.state.iconColor === 'black') {
                this.setState({ iconSwitch: 'heart', iconColor: 'red' })
            } else {
                this.setState({ iconSwitch: 'heart-o', iconColor: 'black' })
            }
        }

        bookmark = _ => this.state.iconSwitch2 === 'bookmark-o' ? this.setState({ iconSwitch2: 'bookmark' }) : this.setState({ iconSwitch2: 'bookmark-o' })

        return (
            <View>
                <View style={styles.inside}>
                    <View style={{ flex: 2 }}>
                        <Image source={{ uri: this.props.imgUs }} style={styles.imgU} />
                    </View>
                </View>
                <View style={styles.nameU}>
                    <Text>
                        {this.props.nameofU}
                    </Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.ellipsis}>
                        <Icon type='font-awesome' name='ellipsis-h' size={13} />
                    </TouchableOpacity>
                </View>
                <View style={styles.insidePt2}>
                    <View style={{ flex: 2 }}>
                        <Image source={{ uri: this.props.imgM }} style={styles.img} />
                    </View>
                </View>
                <View style={styles.icons}>
                    <View style={styles.heart}>
                        <Icon type='font-awesome' name={this.state.iconSwitch} size={20} color={this.state.iconColor} onPress={iconPress} />
                    </View>
                    <TouchableOpacity>
                        <Image source={{ uri: 'https://img.pngio.com/chat-comment-instagram-sets-icon-instagram-comment-png-512_512.png' }} style={styles.chat} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSa1H0cwfGTFIhw0P8fIBJ_gpO_50_LaEgnb9BGeMaqlYwVysyM&usqp=CAU' }} style={styles.arrow} />
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity style={styles.book}>
                            <Icon type='font-awesome' name={this.state.iconSwitch2} size={22} onPress={bookmark} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text>{this.props.likes}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inside: {
        height: 40,
        width: 40,
        marginLeft: 4,
        borderRadius: 100,
        marginTop: 7,
    },
    imgU: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        borderRadius: 100,
    },
    nameU: {
        marginLeft: 52,
        marginTop: -30,
        fontWeight: 'Bold',
    },
    ellipsis: {
        marginLeft: 205,
        marginTop: -13,
    },
    insidePt2: {
        height: 40 + 150,
        width: 43 + 207,
        marginTop: 18,
    },
    img: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    heart: {
        cursor: 'pointer',
        marginLeft: -218,
        marginTop: 5,
    },
    chat: {
        width: 10 + 9,
        height: 10 + 9,
        marginLeft: 32,
        marginTop: -20,
    },
    arrow: {
        width: 10 + 11,
        height: 10 + 11,
        marginLeft: 60,
        marginTop: -21,
    },
    book: {
        marginLeft: 216,
        marginTop: -20,
    },
})


