import React from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { helpers } from '../helpers';
import { styles } from '../styles';
import { FadeIn } from '../Animations/index';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const { Contexts: { Profile: { CheckIfWishListed, useProfileDispatch }, actions } } = helpers;
const { profile: { wishlist: { toggle } } } = actions;

const LandScapeServiceCard = ({service}) => {
  console.log(service);
  const { id, name, price, media, subCategory, rating } = service;
  const thumbnail = media.filter(el => el.type === 'image')[0].uri;
  const isWishListed = CheckIfWishListed(id);
  const { dispatch } = useProfileDispatch();
  return (
    <FadeIn style={[styles.row, styles.marginBottom_md, styles.boxShadow_sm, cardStyle.container]} >
      <ImageBackground source={{uri: thumbnail}}
      style={[cardStyle.thumbnail, styles.marginRight_sm]} />
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
        <View style={[cardStyle.price]}>
          <Text numberOfLines={1} style={[styles.font_xsm, styles.color_gray, styles.marginBottom_sm]}>{price}</Text>
        </View>
      </View>
    </FadeIn>
  )
}

const cardStyle = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 12,
    height: 100,
  },
  thumbnail: {
    width: '30%',
    height: '100%',
    borderRadius: 5,
    overflow: 'hidden',
  },
  price: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});

export default LandScapeServiceCard;