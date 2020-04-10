import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableNativeFeedback } from 'react-native';
import { Container, Section } from '../Container';
import { useFormInput } from '../../helpers/index';
import { Form } from '../../components';
import { styles, colors } from '../styles';
import Header from './header';

const { FormInput } = Form;
const SignUp = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: ({ scene, previous, navigation }) => (
      <Header scene={scene} previous={previous} navigation={navigation} />
      )
    })
  });

  const handleSignUp = () => {
    console.log('clicked')
  }
  const { input: email, handleUserInput: setEmail, error: emailErr, isValid: emailIsValid,  } = useFormInput("email");
  const { input: password, handleUserInput: setPassword, error: passwordErr } = useFormInput("password");
  const { input: password2, handleUserInput: setPassword2 } = useFormInput("password");
  const { input: firstName, handleUserInput: setFirstName, error: firstNameErr, isValid: firstNameIsValid,  } = useFormInput("name");
  const { input: lastName, handleUserInput: setLastName, error: lastNameErr, isValid: lastNameIsValid,  } = useFormInput("name");
  const { input: phone, handleUserInput: setPhone, error: phoneErr, isValid: phoneIsValid,  } = useFormInput("phone");
  const validatePassword = password !== password2 ? 'Passwords do not match' : '';
  const validateAllField = emailIsValid && password === password2 && firstNameIsValid && lastNameIsValid && phoneIsValid;
  console.log(validateAllField)
  return (
  <Container style={[styles.paddingTop_md, styles.paddingHorizontal_md]}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Section>
        <FormInput label="First name" value={firstName} onChange={setFirstName} err={firstNameErr} placeholder="Your first name" />
        <FormInput label="Last name" value={lastName} onChange={setLastName} err={lastNameErr} placeholder="Your last name (surname)" />
        <FormInput label="Phone" value={phone} onChange={setPhone} err={phoneErr} placeholder="Your phone number" keyboardType="phone-pad" />
        <FormInput label="Email" value={email} onChange={setEmail} err={emailErr} placeholder="Your email address" keyboardType="email-address" />
        <FormInput label="Create password" value={password} onChange={setPassword} err={passwordErr} placeholder="Password" />
        <FormInput label="Confirm password" value={password2} onChange={setPassword2} err={validatePassword} placeholder="Re-type password" />
        <View style={[formStyles.buttonWrapper]}>
          <View style={{width: 300, opacity: !validateAllField ? 0.6: 1}}>
            <TouchableNativeFeedback disabled={!validateAllField} onPress={handleSignUp} background={TouchableNativeFeedback.Ripple('#a0a0a0', false)}>
              <View style={[styles.row, styles.padding_md, styles.bg_color1, styles.flexCenter, styles.border_r_5]}>
                <Text numberOfLines={1} style={[styles.color_white, styles.font_md, styles.fontWeight_bold]}>CREATE ACCOUNT</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </Section>
    </ScrollView>
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