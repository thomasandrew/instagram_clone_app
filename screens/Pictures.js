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
    render() {
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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inside: {
        height: 40,
        width: 40,
        marginLeft: 8,
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
        marginLeft: 57,
        marginTop: -30,
        fontWeight: 'Bold',
    },
    ellipsis: {
        marginLeft: 205,
        marginTop: -13,
    },
    insidePt2: {
        height: 40 + 150,
        width: 40 + 194,
        marginLeft: 8,
        marginTop: 18,
    },
    img: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
})


