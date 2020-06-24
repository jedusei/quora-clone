import React from 'react';
import {
    Image, ImageBackground, StyleSheet,
    Text, TouchableNativeFeedback, TouchableOpacity,
    View
} from 'react-native';

export default function Landing() {
    return (
        <ImageBackground source={require('../assets/images/bg_landing.png')} style={styles.container}>
            <Image source={require('../assets/images/logo.png')} style={styles.logo} />
            <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={styles.h2}>A place to share knowledge and better understand the world</Text>
                    <TouchableNativeFeedback>
                        <View style={{ ...styles.btn, backgroundColor: "#df4930" }}>
                            <Image source={require('../assets/images/google_logo.png')} style={styles.btn_logo} />
                            <Text style={styles.btn_text}>Continue with Google</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback>
                        <View style={{ ...styles.btn, backgroundColor: "#507cc0" }}>
                            <Image source={require('../assets/images/fb_logo.png')} style={styles.btn_logo} />
                            <Text style={styles.btn_text}>Continue with Facebook</Text>
                        </View>
                    </TouchableNativeFeedback>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, marginBottom: 20, opacity: 0.4 }}>
                        <TouchableOpacity>
                            <Text style={{ marginRight: 20 }}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>Sign Up With Email</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.h6}>
                    {"By continuing you indicate that you have read and agree to Quora's "}
                    <Text style={styles.link}>Terms of Service</Text>
                    {" and "}
                    <Text style={styles.link}>Privacy Policy</Text>.
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20, paddingHorizontal: 20 }}>
                    <Text style={styles.h6}>Languages</Text>
                    <Text style={styles.h6}>Learn More</Text>
                    <Text style={styles.h6}>© Joseph Edusei 2020</Text>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        resizeMode: 'contain',
        height: 70
    },
    h2: {
        opacity: 0.4,
        fontWeight: 'bold',
        fontSize: 19,
        textAlign: 'center',
        marginBottom: 15
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderRadius: 2,
        marginVertical: 5
    },
    btn_logo: {
        resizeMode: 'contain',
        width: 25,
        height: 25,
        marginRight: 15,
        borderRadius: 2
    },
    btn_text: {
        color: '#fff',
        fontSize: 15
    },
    h6: {
        color: "#000000a0",
        fontSize: 12,
        textAlign: 'center'
    },
    link: {
        color: "#4f86bb",
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid'
    }
});