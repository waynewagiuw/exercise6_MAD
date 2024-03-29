import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button, Gap, PageHeader, TextInput } from '../../components';

const Home = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <PageHeader type="withPhoto" />
            <Gap height={24} />
            <View style={styles.contentWrapper}>
                <Gap height={16} />
                <Text style={{ fontSize: 16, color: 'black', fontFamily: 'Poppins-Medium', }}>Your Balance</Text>
                <Text style={{ fontSize: 24, alignSelf: 'center', color: 'black', fontFamily: 'Poppins-Medium', }}>Rp. 10.000.000</Text>
                <View style={{ height: 1, top: 15, backgroundColor: 'black' }}></View>
                <View>
                    <Gap height={30} />
                    <Text style={styles.detail}>Cash On Hand       Rp. 4.000.000</Text>
                    <Text style={styles.detail}>Cash On Bank        Rp. 6.000.000</Text>
                </View>
                <Gap height={80} />
                <Text style={{ fontSize: 16, color: 'black', fontFamily: 'Poppins-Medium', }}>Add Transaction</Text>
                <Button label="Cash On Hand"
                    onPress={() => navigation.navigate('CashOnHand')} />
                <Gap height={12} />
                <Button
                    label="Cash On Bank"
                    onPress={() => navigation.navigate('CashOnBank')}
                />
            </View>
        </ScrollView>

    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentWrapper: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        paddingHorizontal: 24,
    },
    detail: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: 'black',
        marginVertical: 5
    },
});