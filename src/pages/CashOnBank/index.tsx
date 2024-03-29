import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button, Gap, PageHeader, TextInput, Transaction } from '../../components';

const CashOnHand = ({navigation}) => {
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

    return (
        <ScrollView style={styles.container}>
            <PageHeader
                label="CashOnBank"
                backButton={true}
                onPress={() => navigation.goBack()}
            />
            <Gap height={24} />
            <View style={styles.contentWrapper}>
                <Gap height={16} />
                <TextInput
                    label="Description"
                    placeholder="Add the description"
                />
                <Gap height={16} />
                <TextInput label="Type" placeholder="Debit / Credit" />
                <Gap height={24} />
                <Button
                    label="Save"
                    onPress={() => navigation.navigate('Home')}
                />
                <Gap height={80} />
                <Text style={styles.titletransaction}>Last 3 Transactions</Text>
                
                {lastTransactions.map((transaction, index) => (
                    <Transaction
                        key={index}
                        date={transaction.date}
                        description={transaction.description}
                        amount={transaction.amount}
                    />
                ))}
            </View>
        </ScrollView>
    );
};

export default CashOnHand;

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
    titletransaction: {
        marginBottom:-25,
        fontSize: 16, 
        color: 'black', 
        fontFamily: 'Poppins-Medium',
    }
});
