import React from 'react';
import {
    Image, StatusBar, StyleSheet,
    Text, TouchableOpacity, View
} from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

export default function Header({ title, showExtraButtons }) {
    return (
        <>
            <StatusBar barStyle='dark-content' backgroundColor="#f7f7f8" />
            <View style={styles.container}>
                <Image source={require('../assets/images/generic-profile-photo.png')} style={styles.img} />
                <Text style={styles.title}>{title}</Text>
                {showExtraButtons &&
                    <>
                        <TouchableOpacity>
                            <View style={{ alignItems: 'center', marginRight: 25, paddingTop: 3 }}>
                                <Feather name="search" size={24} color="black" />
                                <Text style={{ ...styles.icon_label, paddingTop: 1 }}>Search</Text>
                            </View></TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ alignItems: 'center' }}>
                                <Ionicons name="md-add-circle-outline" size={27} color="black" />
                                <Text style={styles.icon_label}>Add</Text>
                            </View>
                        </TouchableOpacity>
                    </>
                }
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 5,
        backgroundColor: '#f7f7f8',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#eff0f1'
    },
    img: {
        resizeMode: 'contain',
        width: 43,
        height: 43,
        borderRadius: 23,
        marginRight: 15
    },
    title: {
        flex: 1,
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold'
    },
    icon_label: {
        fontSize: 10,
        fontWeight: 'bold'
    }
});