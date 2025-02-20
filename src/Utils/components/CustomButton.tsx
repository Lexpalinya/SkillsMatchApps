import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import color from '../../Constants/color';

const theme = 'light';
interface CustomButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
}
const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  title,
  style,
  textStyle,
  disabled,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttom, style]}
      disabled={disabled}>
      <Text style={[styles.buttomText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttom: {
    paddingHorizontal: 12,
    paddingVertical: 20,
    backgroundColor: color[theme].primary,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  buttomText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: color[theme].backgroundPage,
  },
});
