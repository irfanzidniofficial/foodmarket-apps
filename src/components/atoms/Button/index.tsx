import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';

interface ButtonProps {
  text?: string;
  color?: string;
  textColor?: string;
  onPress?: any;
}

const Button: React.FC<ButtonProps> = ({
  text,
  color = 'FFC700',
  textColor,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={[styles.container, {backgroundColor: color}]}>
        <Text style={[styles.text, {color: textColor}]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
  container: {
    padding: 12,
    borderRadius: 12,
  },
});
