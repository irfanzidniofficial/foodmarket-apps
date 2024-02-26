import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Logo} from '../../assets';
import {StackNavigationProp} from '@react-navigation/stack';

type SplashScreenProps = {
  navigation: StackNavigationProp<any>; // Sesuaikan tipe StackNavigationProp dengan tipe navigasi Anda
};

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 2000);
  }, []);
  return (
    <View
      style={{
        backgroundColor: '#FFC700',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Logo />
      <View style={{height: 32}} />
      <Text
        style={{
          fontSize: 32,
          color: '#020202',
          fontFamily: 'Poppins-Medium',
        }}>
        FoodMarket
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
