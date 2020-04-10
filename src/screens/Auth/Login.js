import React from 'react';
import { TextInput, View, Text, Button, StyleSheet, StatusBar, TouchableNativeFeedback } from 'react-native';
import { StackActions } from '@react-navigation/native';
import { Container, Section } from '../Container';
import { useFormInput } from '../../helpers/index';
import { Form } from '../../components';
import { styles, colors } from '../styles';
import LinearGradient from 'react-native-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Header from './header';
const { FormInput } = Form;
const Login = ({navigation, route: { params }}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: ({ scene, previous, navigation }) => (
      <Header scene={scene} previous={previous} navigation={navigation} />
      )
    })
  })
  const { input: email, handleUserInput: setEmail, error: emailErr, isValid: emailIsValid } = useFormInput("email");
  const { input: password, handleUserInput: setPassword, error: passwordErr, isValid: passIsValid,  } = useFormInput("password");
  const validateFields = emailIsValid && passIsValid
  return (
    <Container style={[styles.paddingTop_lg, styles.paddingHorizontal_md]}>
      <StatusBar backgroundColor={colors.color1} />
      <Section style={[{flex: 1}]}>
        <FormInput label="Email" value={email} onChange={setEmail} err={emailErr} placeholder="Your email address" autoCompleteType="email" keyboardType="email-address" />
        <FormInput label="Password" value={password} onChange={setPassword} err={passwordErr} placeholder="Password" autoCompleteType="password" />
        <View style={[styles.row, styles.justifyContent_end, styles.marginBottom_md]}>
          <Text style={[styles.uppercase, styles.color_primary, styles.font_sm, styles.fontWeight_bold]}>forgot password</Text>
        </View>
        <View style={[styles.row, styles.alignItems_center]}>
          <Text style={[styles.color_primary, styles.font_sm, styles.fontWeight_bold, styles.marginRight_sm]}>Don't have an account ?</Text>
          <View style={[]} onPress={() => navigation.navigate("SignUp")}>
            <Text style={[styles.color1, styles.font_md, styles.fontWeight_bold, styles.marginRight_sm]}>sign up</Text>
          </View>
        </View>
        <View style={[formStyles.buttonWrapper]}>
        <LoginButton navigation={navigation} isValid={validateFields} params={params} />
        </View>
      </Section>

    </Container>
  )
}

const LoginButton = ({navigation, isValid, params}) => {
  const popAction = StackActions.pop(2);
  console.log(params);
  const handleLogin = () => {
    params.redirectedBack ? (
      navigation.dispatch(popAction)
    ) : null
  }
  return (
    <View style={{width: 300, opacity: isValid ? 1 : 0.6}}>
      <TouchableNativeFeedback disabled={!isValid} onPress={handleLogin} background={TouchableNativeFeedback.Ripple('#a0a0a0', false)}>
        <View style={[styles.row, styles.padding_md, styles.bg_color1, styles.flexCenter, styles.border_r_5]}>
          <Text numberOfLines={1} style={[styles.color_white, styles.font_md, styles.fontWeight_bold]}>LOGIN</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

const formStyles = StyleSheet.create({
  buttonWrapper: {
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // marginBottom: 36,
  }
})

export default Login;