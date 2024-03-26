import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native'
import Back from '../../assets/back.jpeg'

const CashOnBank = () => {
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const navigation = useNavigation();
    const lastTransactions = [
        {
            date: '17 April 2020',
            description: 'Water, Food',
            amount: '-Rp. 300.000',
        },
        {
            date: '18 April 2020',
            description: 'Office supplies',
            amount: '-Rp. 300.000',
        },
        {
            date: '19 April 2020',
            description: 'Top Up',
            amount: '+Rp. 300.000',
        },
    ];

    const handleSignIn = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <TouchableOpacity onPress={handleSignIn}>
                    <Image style={styles.imageback} source={Back} />
                </TouchableOpacity>
                <Text style={styles.titletext}>Cash On Bank</Text>
            </View>

            <View style={styles.titlesub}>
                <Text style={styles.label}>Description</Text>
                <TextInput
                    placeholder={"Add the description"}
                    style={styles.input}
                    value={description}
                    onChangeText={text => setDescription(text)}
                />
                <Text style={styles.label}>Type</Text>
                <TextInput
                    placeholder={"Debit / Credit"}
                    style={styles.input}
                    value={type}
                    onChangeText={text => setType(text)}
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.buttonSave} onPress={handleSignIn}>
                    <Text style={{
                        color: 'black', fontSize: 16,
                        fontFamily: 'Poppins-Medium',
                    }}>Save</Text>
                </TouchableOpacity>
                <Text style={styles.labeldua}>Last 3 Transactions</Text>
                <ScrollView contentContainerStyle={styles.transactionScrollContainer} nestedScrollEnabled={true}>
                    {lastTransactions.map((transaction, index) => (
                        <View style={styles.transactionItem} key={index}>
                            <View style={styles.border}>
                                <Text style={styles.transactionDate}>{transaction.date}</Text>
                                <Text style={styles.transactionDescription}>{transaction.description}</Text>
                                <Text style={[styles.transactionAmount, transaction.amount.startsWith('+') ? styles.greenText : styles.redText]}>{transaction.amount}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    imageback: {
        width: 30,
        height: 30,
        marginVertical: 45,
        marginHorizontal: 20,
        marginRight: 5
    },
    title: {
        backgroundColor: 'white',
        height: 120,
        flexDirection: 'row'
    },
    titlesub: {
        backgroundColor: 'white',
        marginTop: 20,
        height: '100%'
    },
    titletext: {
        fontFamily: 'Poppins-Medium',
        color: 'black',
        fontSize: 27,
        marginHorizontal: 20,
        marginVertical: 40
    },
    label: {
        color: 'black',
        fontSize: 18,
        fontWeight: "bold",
        marginHorizontal: 20,
        marginBottom: -22,
        marginTop: 20,
        fontFamily: 'Poppins-Medium',
    },
    labeldua: {
        color: 'black',
        fontSize: 20,
        fontWeight: "bold",
        marginHorizontal: 20,
        marginBottom: -25,
        marginTop: 100,
        fontFamily: 'Poppins-Medium',
    },
    input: {
        height:43,
        marginHorizontal: 20,
        marginTop: 30,
        marginVertical:3,
        borderColor: "black",
        borderWidth: 1,
        padding: 8,
        borderRadius: 10,
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
    },
    buttonSave: {
        backgroundColor: "#02CF8E",
        marginHorizontal: 20,
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: 'center',
        marginTop: 20,

    },
    buttoncreate: {
        backgroundColor: "#778899",
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 20,
    },
    border: {
        padding: 15,
        height: 80,
        marginHorizontal: 20,
        marginTop: 35,
        marginBottom: -40,
        borderRadius: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
    },
    transactionContainer: {
        marginTop: 50,
        marginHorizontal: 40,
        backgroundColor: 'white',
        flex: 1,
    },
    transactionScrollContainer: {
        flexGrow: 1,
    },
    transactionItem: {
        marginBottom: 10,
        
    },
    transactionDate: {
        fontSize: 16,
        marginBottom: 5,
        marginHorizontal:10,
        fontFamily: 'Poppins-Medium'
    },
    transactionDescription: {
        fontSize: 16,
        marginBottom: 5,
        marginHorizontal:10,
        fontFamily: 'Poppins-Medium',
        color: 'black'
    },
    transactionAmount: {
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        marginTop: -50,
        fontFamily: 'Poppins-Medium'
    },
    greenText: {
        color: '#02CF8E',
    },
    redText: {
        color: '#D9435E',
    },
})

export default CashOnBank;
