import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native'
import Profil from '../../assets/imagepr.png'
// import Profildua from '../../assets/image2.svg' ==> pake svg


const Home = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    
    const handlehands = () => {
        navigation.navigate('CashOnHand');
    };
    const handlebank = () => {
        navigation.navigate('CashOnBank');
    };

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <View>
                    <Text style={styles.titletext}>Money Tracker</Text>
                    <Text style={styles.subtitletext}>Track your money</Text>
                </View>
                <View>
                    {/* <Profildua style={styles.imageprofil}/> */} 

                    <Image style={styles.imageprofil} source={Profil}  />
                </View>
            </View>
            <View style={styles.titlesub}>
                <View style={styles.label}>
                    <Text style={{fontSize:19, color:'black', fontFamily: 'Poppins-Medium',}}>Your Balance</Text>
                    <Text style={{fontSize:26, alignSelf:'center', color:'black', fontFamily: 'Poppins-Medium',}}>Rp. 10.000.000</Text>
                    <View style={{height: 1, top:15,backgroundColor: 'black'}}></View>
                    <View style={{marginTop:30}}>
                        <Text style={styles.detail}>Cash On Hand       Rp. 4.000.000</Text>
                        <Text style={styles.detail}>Cash On Bank        Rp. 6.000.000</Text>
                    </View>
                    </View>
                <Text style={styles.labeldua}>Add Transaction</Text>
                
                <TouchableOpacity style={styles.buttonhands} onPress={handlehands}>
                    <Text style={styles.buttontext}>Cash On Hand</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonbank} onPress={handlebank}>
                    <Text style={styles.buttontext}>Cash On Bank</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.labeltiga}>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    labeltiga:{

    },
    container: {
        flex: 1,
        backgroundColor: '#fafafc',
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
        fontSize: 25,
        marginHorizontal: 24,
        marginTop:35
    },
    subtitletext :{
        fontFamily: 'Poppins-Medium',
        color: '#8D92A3',
        fontSize: 15,
        marginTop : -5,
        marginLeft:24
    },
    imageprofil:{
        width:60,
        height:60,
        marginTop : -60,
        marginLeft:306,
        borderRadius:7
    },
    label: {
        color: 'black',
        fontSize: 20,
        fontWeight: "bold",
        marginHorizontal: 20,
        marginBottom: -25,
        marginTop:10,
        fontFamily: 'Poppins-Medium',
        
    },
    labeldua: {
        color: 'black',
        fontSize: 20,
        fontWeight: "bold",
        marginHorizontal: 20,
        marginBottom: -25,
        marginTop:100,
        fontFamily: 'Poppins-Medium',
        
    },
    detail:{
        fontSize:16,
        fontFamily: 'Poppins-Medium',
        color:'black',
        marginVertical:5
    },
    buttonhands: {
        backgroundColor: "#02CF8E",
        marginHorizontal: 20,
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: 'center',
        marginTop: 40,

    },
    buttonbank: {
        backgroundColor: "#02CF8E",
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 20,
    },
    buttontext:{
        color: 'black', 
        fontSize: 17,
        fontFamily: 'Poppins-Medium',
    },
})

export default Home;
