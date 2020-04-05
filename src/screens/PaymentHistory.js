import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container } from './Container';
import { styles } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
const PaymentHistory = () => {
  return (
      <Container>

      </Container>
  )
}

const Payment = ({ payment }) => {
  const { status, amount } = payment;
  const { message, messageColor, icon, iconBg } = checkStatus(status);
  return (
    <View style={[styles.row, styles.alignItems_center, styles.slimBorderBottom]}>
      <View style={[styles.row, styles.alignItems_center]}>
        <View style={[styles.flexCenter, styles.marginRight_sm, paymentStyle.statusIcon, iconBg]}>
          <FontAwesomeIcon icon={icon} style={{...styles.font_lg}}/>
        </View>
        <View style={[]}>
          <Text numberOfLines={1} style={[styles.font_sm, fontWeight_700, styles.marginBottom_xsm]}>Chicken Pie with Sauced chips</Text>
          <Text numberOfLines={1} style={[styles.font_xsm, fontWeight_600, styles.marginBottom_xsm, messageColor]}>{message}</Text>
          <Text numberOfLines={1} style={[styles.font_xsm, styles.color_gray, fontWeight_600, styles.marginBottom_xsm]}>21-04-2020</Text>
        </View>
      </View>
      <Text style={[styles.fontWeight_700, styles.font_md, messageColor]}>$ {amount}</Text>
    </View>
  )
}

const checkStatus = (status) => {
  switch(status) {
    case 'success':
      return {icon: 'check', iconBg: styles.bg_success, message: 'transaction successful', messageColor: styles.color_success}
    case 'failure':
    return {icon: 'times', iconBg: styles.bg_danger, message: 'transaction failed', messageColor: styles.color_danger}
    default:
      throw new Error('invalid Status type!')
  }
}

const paymentStyle = StyleSheet.create({
  statusIcon: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  }
})

export default PaymentHistory;
