import React, { useRef } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Container, Section } from './Container';
import { styles } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Modal } from '../components/index';
import { payments } from '../data';
import { TouchableHighlight } from 'react-native-gesture-handler';

const { useDrawUpModal } = Modal;
const PaymentHistory = () => {
  return (
    <Container>
      <Section>
        {payments.map((payment, key) => <Payment key={key} payment={payment} />)}
      </Section>
    </Container>
  )
}

const Payment = ({ payment }) => {
  const { status, amount, date, orderId, servicePaidFor } = payment;
  const { drawUpModal: DrawupModal, setVisibility } = useDrawUpModal({children: <OrderedItem order={servicePaidFor} />})
  const { message, messageColor, icon, iconBg } = checkStatus(status);
  return (
    <TouchableHighlight underlayColor={"#ccc"} onPress={() => setVisibility(true)} style={[]}>
      <View style={[styles.row, styles.alignItems_center, styles.slimBorderBottom]}>
        <View style={[styles.row, styles.alignItems_center]}>
          <View style={[styles.flexCenter, styles.marginRight_sm, paymentStyle.statusIcon, iconBg]}>
            <FontAwesomeIcon icon={icon} style={{...styles.font_lg}}/>
          </View>
          <View style={[]}>
            <Text numberOfLines={1} style={[styles.font_sm, fontWeight_700, styles.marginBottom_xsm]}>{orderId}</Text>
            <Text numberOfLines={1} style={[styles.font_xsm, fontWeight_600, styles.marginBottom_xsm, messageColor]}>{message}</Text>
            <Text numberOfLines={1} style={[styles.font_xsm, styles.color_gray, fontWeight_600, styles.marginBottom_xsm]}>{date}</Text>
          </View>
        </View>
        <Text style={[styles.fontWeight_700, styles.font_md, messageColor]}>$ {amount}</Text>
      </View>
      {DrawupModal}
    </TouchableHighlight>
  )
}

const OrderedItem = ({ order }) => {
const { service: { id, name, price, media, subCategory, rating }, qty } = order;
  const thumbnail = media.filter(el => el.type === 'image')[0].uri;
  return (
    <Section style={[]}>
      <View style={[styles.row, styles.marginBottom_md, styles.slimBorderBottom, paymentStyle.itemContainer]} >
        <ImageBackground source={{uri: thumbnail}}
        style={[paymentStyle.itemThumbnail, styles.marginRight_sm]} />
        <View style={{width: '60%', ...styles.paddingHorizontal_sm}}>
          <Text numberOfLines={2} style={[styles.font_md, styles.fontWeight_bold, styles.marginBottom_xsm]}>{name}</Text>
          <Text numberOfLines={1} style={[styles.font_xsm, styles.color_gray, styles.marginBottom_sm]}>{subCategory}</Text>
          <View style={[styles.row, styles.alignItems_center, styles.nowrap, styles.marginBottom_md]}>
            <View style={[styles.row, styles.alignItems_center, styles.marginRight_sm]}>
              <FontAwesomeIcon icon="star" style={{...styles.color3, ...styles.font_sm, ...styles.marginRight_xsm}} />
              <Text style={[styles.fontWeight_700, styles.font_xsm]}>{rating}</Text>
            </View>
            <View style={[styles.row, styles.alignItems_center, styles.marginRight_sm]}>
              <FontAwesomeIcon icon="clock" style={{...styles.color3, ...styles.font_sm, ...styles.marginRight_xsm}} />
              <Text style={[styles.fontWeight_700, styles.font_xsm]}>{14} mins</Text>
            </View>
            <View style={[styles.row, styles.alignItems_center, styles.marginRight_sm]}>
              <FontAwesomeIcon icon="map-marked" style={{...styles.color3, ...styles.font_sm, ...styles.marginRight_xsm}} />
              <Text style={[styles.fontWeight_700, styles.font_xsm]}>{4.1} km</Text>
            </View>
          </View>
          <View style={[{flex: 1}, styles.justifyContent_end, styles.alignItems_end]}>
            <Text numberOfLines={1} style={[styles.font_xsm, styles.color_gray, styles.marginBottom_sm]}>{price}</Text>
            <View style={[styles.row, styles.alignItems_center, styles.marginRight_sm]}>
              <Text style={[styles.font_sm, styles.marginRight_xsm]}>Qty:</Text>
              <Text style={[styles.fontWeight_700, styles.font_xsm]}>{qty}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.row, styles.alignItems_center, styles.justifyContent_between]}>
        <Text numberOfLines={2} style={[styles.font_sm]}>Share your experience with us</Text>
        <Button title="Share Feedback" onPress={() => navigation.navigate("CreateFeedback", { serviceId: id })}/>
      </View>
    </Section>
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
  },
  itemContainer: {
    width: Dimensions.get('window').width - 12,
    height: 100,
  },
  itemThumbnail: {
    width: '30%',
    height: '100%',
    borderRadius: 5,
    overflow: 'hidden',
  },
})

export default PaymentHistory;
