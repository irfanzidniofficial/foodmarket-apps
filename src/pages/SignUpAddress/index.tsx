import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Select, TextInput} from '../../components';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {StackParamList} from '../../router';

const SignUpAddress = () => {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  return (
    <View style={styles.page}>
      <Header title="Address" subtitle="Make sure it's valid" onBack />
      <View style={styles.container}>
        <TextInput label="Phono No" placeholder="Type your phone number" />
        <Gap height={16} />

        <TextInput label="Address" placeholder="Type your address" />
        <Gap height={16} />
        <TextInput label="House No" placeholder="Type your house number" />
        <Gap height={16} />
        {/* <TextInput label="City" placeholder="Type your city" /> */}
        <Select label="City" />

        <Gap height={24} />
        <Button
          text="Sign Up Now"
          color="#FFC700"
          onPress={() => navigation.replace('SuccessSignUp')}
        />
      </View>
    </View>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
