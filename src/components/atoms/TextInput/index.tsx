import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import React from 'react';

interface TextInputProps {
  label?: string;
  placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = ({label, placeholder}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
  input: {
    color: '#8D92A3',
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
  },
});
