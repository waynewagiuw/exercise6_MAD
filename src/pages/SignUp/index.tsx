import React, { useState } from 'react';
import { View, Text,Image, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'
import Add from '../../assets/add.jpeg'
import Back from '../../assets/back.jpeg'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleSignIn = () => {
        navigation.navigate('Home');
    };
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Image style={styles.imageback} source={Back}  />
                <Text style={styles.titletext}>Sign Up</Text>
            </View>

            <View style={styles.titlesub}>
                <Image style={styles.imageadd} source={Add}  />
                <Text style={styles.label}>Full Name</Text>
                <TextInput
                    placeholder={"Type your full name"}
                    style={styles.input}
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <Text style={styles.label}>Email Address</Text>
                <TextInput
                    placeholder={"Type your email address"}
                    style={styles.input}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    placeholder={"Type your password"}
                    style={styles.input}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.buttonContinue} onPress={handleSignIn}>
                    <Text style={{
                        color: 'black', fontSize: 16,
                        fontFamily: 'Poppins-Medium',
                    }}>Continue</Text>
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
    imageback:{
        width:30,
        height:30,
        marginVertical:45,
        marginHorizontal:20,
        marginRight:5
    },
    imageadd:{
        width:150,
        height:150,
        alignSelf:'center',
        marginTop:20,
        marginBottom:-25
    },
    title: {
        backgroundColor: 'white',
        height: 130,
        flexDirection:'row'
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
    buttonContinue: {
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

export default SignUp;
