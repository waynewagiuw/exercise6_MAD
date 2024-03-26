import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import Money from '../../assets/Vectorjpg.png'
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation()

  useEffect(() => {
    const delay = setTimeout(() =>{
      navigation.navigate("SignIn")
    }, 3000)
    return()=>clearTimeout(delay)
  },[navigation])
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Money}  />
      <Text style={styles.text}>Money Tracker</Text>
    </View>
  );
};

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00fa9a',
  },
  image:{
    width:140,
    height:140,
    marginTop: 50,
  },
  text: {
    fontFamily: 'Poppins-Medium', 
    fontSize: 40,
    alignSelf: 'center',
    color: 'black',
    marginBottom:30
  },
});

export default Splash;
