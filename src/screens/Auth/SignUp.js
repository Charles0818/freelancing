import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Container, Section } from '../Container';
import { useFormInput } from '../../helpers/index';
import { Form } from '../../components';
import { styles, colors } from '../styles';

const { FormInput } = Form;
const SignUp = () => {
  const { input: email, handleUserInput: setEmail, error: emailErr, isValid: emailIsValid,  } = useFormInput();
  const { input: password, handleUserInput: setPassword, error: passwordErr, isValid: passIsValid,  } = useFormInput();
  const { input: password2, handleUserInput: setPassword2, error: passwordErr2, isValid: passIsValid2,  } = useFormInput();
  const { input: firstName, handleUserInput: setFirstName, error: firstNameErr, isValid: firstNameIsValid,  } = useFormInput();
  const { input: lastName, handleUserInput: setLastName, error: lastNameErr, isValid: lastNameIsValid,  } = useFormInput();
  const { input: phone, handleUserInput: setPhone, error: phoneErr, isValid: phoneIsValid,  } = useFormInput();
  
  return (
    <Container>
      <Section>
        <FormInput value={firstName} onChange={setFirstName} err={firstNameErr} placeholder="Your first name" />
        <FormInput value={lastName} onChange={setLastName} err={lastNameErr} placeholder="Your last name (surname)" />
        <FormInput value={phone} onChange={setPhone} err={phoneErr} placeholder="Your phone number" keyboardType="phone-pad" />
        <FormInput value={email} onChange={setEmail} err={emailErr} placeholder="Your email address" keyboardType="email-address" />
        <FormInput value={password} onChange={setPassword} err={passwordErr} placeholder="Password" />
        <FormInput value={password2} onChange={setPassword2} err={passwordErr2} placeholder="Re-type password" />
        <View style={[styles.alignItems_end]}>
          <Text style={[styles.uppercase, styles.color_primary, styles.font_sm, styles.fontWeight_bold]}>forgot password</Text>
        </View>
        <View style={[formStyles.buttonWrapper]}>
          <Button title="CREATE ACCOUNT" color={colors.color1} />
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
  },
})

export default SignUp;