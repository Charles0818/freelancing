import React from 'react';
import { TextInput, View, Text, Button, StyleSheet } from 'react-native';
import { Container, Section } from '../Container';
import { useFormInput } from '../../helpers/index';
import { Form } from '../../components';
import { styles, colors } from '../styles';

const { FormInput } = Form;
const Login = () => {
  const { input: email, handleUserInput: setEmail, error: emailErr, isValid: emailIsValid,  } = useFormInput();
  const { input: password, handleUserInput: setPassword, error: passwordErr, isValid: passIsValid,  } = useFormInput();
  return (
    <Container>
      <Section>
        <FormInput value={email} onChange={setEmail} err={emailErr} placeholder="Your email address" autoCompleteType="email" keyboardType="email-address" />
        <FormInput value={password} onChange={setPassword} err={passwordErr} placeholder="Password" autoCompleteType="password" />
        <View style={[styles.alignItems_end]}>
          <Text style={[styles.uppercase, styles.color_primary, styles.font_sm, styles.fontWeight_bold]}>forgot password</Text>
        </View>
        <View style={[formStyles.buttonWrapper]}>
          <Button title="LOGIN" color={colors.color1} />
        </View>
      </Section>

    </Container>
  )
}

const formStyles = StyleSheet.create({
  buttonWrapper: {
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // marginBottom: 36,
  },
})

export default Login;