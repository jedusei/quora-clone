import React from 'react';
import {
    ActivityIndicator, Alert,
    TouchableOpacity, StyleSheet, View
} from 'react-native';
import { WebView } from 'react-native-webview';
import { MaterialIcons } from '@expo/vector-icons';

export default function WebViewScreen({ navigation }) {
    const [loading, setLoading] = React.useState(true);
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <WebView
                    source={{ uri: navigation.state.params.url }}
                    originWhitelist={['*']}
                    onLoadEnd={() => setLoading(false)}
                />
                {loading &&
                    <View style={styles.spinnerContainer}>
                        <ActivityIndicator color="#b92b27" size={35} />
                    </View>
                }
            </View>
            <View style={styles.bottomBar}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={{ padding: 10 }}>
                        <MaterialIcons name='close' size={30} color="#333" />
                    </View>
                </TouchableOpacity>
            </View>
        </View >
    );
}

WebViewScreen.navigationOptions = {
    header: null
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    spinnerContainer: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomBar: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#ddd",
        borderTopWidth: 2,
        borderColor: "#ccc"
    }
});