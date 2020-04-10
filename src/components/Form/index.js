import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { styles } from '../styles';
export const FormInput = ({placeholder, value, onChange, err, label, ...rest}) => {
  return (
    <View style={[styles.marginBottom_sm]}>
      <Text style={[styles.fontWeight_bold, styles.marginBottom_xsm]}>{label}</Text>
      <TextInput style={[formStyles.input, styles.slimBorderBottom, styles.marginBottom_xsm]}
        placeholder={placeholder}
        onChangeText={text => onChange(text)}
        value={value}
        {...rest}
      />
      <Text style={[styles.color_danger, styles.font_sm]}>{err}</Text>
    </View>
  )
}

const formStyles = StyleSheet.create({
  input: {
    width: '100%',
    height: 40,
    paddingBottom: 10,
    paddingRight: 15,
  }
})