import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-picker/picker';

interface SelectProps {
  label?: string;
}

const Select: React.FC<SelectProps> = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Picker
        // selectedValue={selectedLanguage}
        // onValueChange={(itemValue, itemIndex) =>
        //   setSelectedLanguage(itemValue)
        // }
        >
          <Picker.Item label="Semarang" value="semarang" />
          <Picker.Item label="Jakarta" value="jakarta" />
          <Picker.Item label="Surabaya" value="surabaya" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  label: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
  input: {
    color: '#8D92A3',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 2,
    paddingVertical: 0,
  },
});
