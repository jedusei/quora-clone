import React from 'react';
import {
    AsyncStorage, FlatList, Image,
    ImageBackground, StyleSheet, Text, TextInput,
    TouchableNativeFeedback, TouchableOpacity, View
} from 'react-native';
import AppModal from '../components/AppModal';
import { getUser } from '../api';

export default function Landing({ navigation }) {
    const [loginFormVisible, setLoginFormVisible] = React.useState(false);
    return (
        <>
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
                            <TouchableOpacity onPress={() => setLoginFormVisible(true)}>
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
            <LoginModal visible={loginFormVisible}
                onRequestClose={() => setLoginFormVisible(false)}
                onLogin={user => {
                    AsyncStorage.setItem('user', JSON.stringify(user));
                    navigation.navigate('Main');
                }}
            />
        </>
    );
}

function LoginModal(props) {
    const initialState = {
        email: "",
        password: "",
        isBusy: false
    };
    const [state, _setState] = React.useState(initialState);
    const setState = (newState) => {
        _setState({ ...state, ...newState });
    };
    const fields = {
        email: { label: "Email", type: "email-address", value: state.email },
        password: { label: "Password", type: "password", value: state.password }
    };
    const isValid = (state.email != "") && (state.password != "");

    return (
        <AppModal title="Login" isBusy={state.isBusy} {...props}
            onShow={() => setState(initialState)}
            submitBtn={
                <TouchableOpacity disabled={!isValid}
                    onPress={async () => {
                        setState({ isBusy: true });
                        let user = await getUser(state.email);
                        setState({ isBusy: false });
                        if (!user)
                            alert('There is no account registered with the specified email.')
                        else {
                            if (user.password !== state.password)
                                alert('The password you entered is wrong.')
                            else
                                props.onLogin(user);
                        }
                    }}>
                    <Text style={{ ...styles.modal_submit_text, color: (isValid ? '#c14340' : "#bcbcbc") }}>Done</Text>
                </TouchableOpacity>
            }>
            <Form fields={fields} setState={setState} />
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 12, textAlign: 'center', marginBottom: 2 }}>
                    Login using the email address and password you used to sign up.
                </Text>
                <TouchableOpacity>
                    <Text style={{ fontSize: 13, color: '#4e85bb', textAlign: 'center' }}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
        </AppModal>
    );
}

function Form({ fields, setState }) {
    return (
        <View style={{ marginBottom: 20 }}>
            <FlatList data={Object.entries(fields)}
                keyExtractor={(item) => item[0]}
                ListHeaderComponent={() => <View style={{ height: 1, backgroundColor: "#f5f5f5" }} />}
                renderItem={({ item: { "0": key, "1": desc } }) =>
                    <View style={styles.modal_field_row}>
                        <Text style={styles.modal_field_label}>{desc.label}</Text>
                        <TextInput
                            keyboardType={desc.type === "password" ? 'default' : desc.type}
                            secureTextEntry={desc.type === "password"}
                            value={desc.value}
                            onChangeText={text => setState({ [key]: text.trim() })}
                            style={styles.modal_text_field} />
                    </View>
                } />
        </View>
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
    },
    modal_submit_text: {
        fontSize: 18
    },
    modal_field_row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#f5f5f5",
        borderStyle: 'solid'
    },
    modal_field_label: {
        flex: 0.3,
        color: "#9d9d9d",
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'right',
        marginRight: 10
    },
    modal_text_field: {
        flex: 1,
        fontSize: 17,
        paddingVertical: 15
    }
});