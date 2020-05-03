import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

export default class App extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity>
                    <View style={styles.insideScrollView}>
                        <LinearGradient
                            colors={['#CA1D7E', '#E35157', '#F2703F']}
                            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                            style={{
                                height: 54,
                                width: 54,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 100,
                                marginLeft: 15,
                                marginTop: 3,
                            }}>
                            <Image source={{ uri: this.props.users }}
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 75 / 2,
                                    alignSelf: 'center',
                                    borderColor: '#fff',
                                    borderWidth: 3
                                }} />
                        </LinearGradient>
                    </View>
                    <View style={styles.names}>
                        <Text>
                            {this.props.name}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    names: {
        marginLeft: 27,
        fontFamily: 'Verdana',
    },
})
