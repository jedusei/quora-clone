import React from 'react';
import {
    ActivityIndicator, Modal, StyleSheet, StatusBar,
    Text, TouchableOpacity, View
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AppModal({ title, submitBtn, isBusy, children, onRequestClose, ...props }) {
    return (
        <Modal animationType="slide" onRequestClose={!isBusy && onRequestClose} {...props}>
            <View style={styles.bg}>
                <StatusBar backgroundColor="#000" />
                <View style={styles.container}>
                    <View style={styles.header_row}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <TouchableOpacity onPress={onRequestClose}>
                                <Ionicons name="md-close" size={25} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={styles.header_text}>{title}</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                            {submitBtn}
                        </View>
                    </View>
                    {children}
                    {isBusy &&
                        <View style={styles.overlay}>
                            <ActivityIndicator size={40} />
                        </View>
                    }
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '#000a'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginTop: 15
    },
    overlay: {
        backgroundColor: '#0003',
        position: "absolute",
        left: 0, right: 0,
        top: 0, bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header_row: {
        flexDirection: 'row',
        alignItems: 'baseline',
        padding: 15
    },
    header_text: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#949699'
    }
});