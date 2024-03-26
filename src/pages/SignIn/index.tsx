import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleSignIn = () => {
        navigation.navigate('SignUp');
    };

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titletext}>Sign In</Text>
            </View>

            <View style={styles.titlesub}>
                <Text style={styles.label}>Email Address</Text>
                <TextInput
                    placeholder={"Type your email address"}
                    style={styles.input}
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    placeholder={"Type your password"}
                    style={styles.input}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.buttonSignIn}>
                    <Text style={{
                        color: 'black', fontSize: 16,
                        fontFamily: 'Poppins-Medium',
                    }}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttoncreate} onPress={handleSignIn}>
                    <Text style={{
                        color: 'white', fontSize: 16,
                        fontFamily: 'Poppins-Medium',
                    }}>Create New Account</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    title: {
        backgroundColor: 'white',
        height: 130
    },
    titlesub: {
        backgroundColor: 'white',
        marginTop: 30,
        height: '100%'
    },
    titletext: {
        fontFamily: 'Poppins-Medium',
        color: 'black',
        fontSize: 30,
        marginHorizontal: 20,
        marginVertical: 40
    },
    label: {
        color: 'black',
        fontSize: 20,
        fontWeight: "bold",
        marginHorizontal: 20,
        marginBottom: -25,
        marginTop:30,
        fontFamily: 'Poppins-Medium',
        
    },
    input: {
        height: 50,
        marginHorizontal: 20,
        marginTop: 30,
        marginBottom: -12,
        borderColor: "black",
        borderWidth: 1,
        padding: 8,
        borderRadius: 10,
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
    },
    buttonSignIn: {
        backgroundColor: "#3cb371",
        marginHorizontal: 20,
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 40,

    },
    buttoncreate: {
        backgroundColor: "#778899",
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 20,
    },

})

export default SignIn;
