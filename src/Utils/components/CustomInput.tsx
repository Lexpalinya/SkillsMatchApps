import {
  Platform,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import color from '../../Constants/color';

const theme = 'light';
interface CustomInputProps extends TextInputProps {
  label?: string;
  error?: string;
  touched?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
  errorStyle?: StyleProp<TextStyle>;
  required?: boolean;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
const CustomInputAuth: React.FC<CustomInputProps> = ({
  label,
  error,
  touched,
  value,
  placeholder,
  containerStyle,
  labelStyle,
  inputStyle,
  errorStyle,
  required = false,
  helperText,
  leftIcon,
  rightIcon,
  onChangeText,
  onFocus,
  onBlur,
  ...restProps
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = (e: any) => {
    setIsFocused(true);
    onFocus?.(e);
  };
  const handleBlur = (e: any) => {
    setIsFocused(false);
    onFocus?.(e);
  };
  const showError = error && touched;
  const getInputStyle = (): StyleProp<TextStyle> => {
    const baseStyle: StyleProp<TextStyle> = [styles.input];

    if (containerStyle) baseStyle.push(inputStyle);
    if (leftIcon) baseStyle.push({paddingLeft: 40});
    if (rightIcon) baseStyle.push({paddingRight: 40});

    return baseStyle;
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text
          style={[
            styles.label,
            labelStyle,
            isFocused && styles.focusedLabel,
            showError && styles.errorLabel,
          ]}>
          {label}
          {required && <Text style={styles.required}> *</Text>}
        </Text>
      )}
      <View style={[styles.inputContainer]}>
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
        <TextInput
          value={value}
          placeholderTextColor={'999'}
          placeholder={placeholder}
          style={getInputStyle()}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...restProps}
        />
        {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
      </View>
      <View style={styles.messageContainer}>
        {showError ? (
          <Text style={[styles.errorText, errorStyle]} numberOfLines={2}>
            {error}
          </Text>
        ) : helperText ? (
          <Text style={styles.helperText} numberOfLines={2}>
            {helperText}
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export default CustomInputAuth;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  inputContainer: {
    minHeight: 48,
    borderColor: color[theme].containerBorder,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: color[theme].containerBackground,
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: 500,
    color: color[theme].label,
    marginBottom: 6,
  },

  focusedLabel: {
    color: color[theme].labelFocus,
  },
  errorLabel: {
    color: color[theme].error,
  },
  input: {
    flex: 1,
    fontSize: 16,
    borderStyle: 'solid',
    paddingVertical: Platform.OS == 'ios' ? 12 : 8,
    paddingHorizontal: 16,
    minHeight: 48,
  },

  leftIcon: {
    position: 'absolute',
    justifyContent: 'center',
    height: '100%',
    left: 12,
    zIndex: 1,
  },
  rightIcon: {
    position: 'absolute',
    justifyContent: 'center',
    height: '100%',
    right: 12,
    zIndex: 1,
  },

  required: {
    color: color[theme].error,
    fontWeight: 'bold',
  },
  messageContainer: {
    minHeight: 20,
    marginTop: 4,
    paddingHorizontal: 4,
  },
  errorText: {
    fontSize: 14,
    color: color[theme].error,
  },
  helperText: {
    fontSize: 14,
    color: color[theme].label,
  },
  focusContainer: {
    borderColor: color[theme].containerborderfocus,
    borderWidth: 2,
  },
  errorContainer: {
    borderColor: color[theme].error,
  },
});
