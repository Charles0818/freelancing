import React from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { helpers } from '../helpers';
import { styles } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const { Contexts: { Profile: { CheckIfWishListed, useProfileDispatch }, actions } } = helpers;
const { profile: { wishlist: { toggle } } } = actions;

const LandScapeServiceCard = ({service}) => {
  const { id, name, price, media, subCategory } = service;
  const thumbnail = media.filter(el => el.type === 'image')[0].uri;
  const isWishListed = CheckIfWishListed(id);
  const { dispatch } = useProfileDispatch();
  return (
    <View style={[styles.row, cardStyle.container]} >
      <ImageBackground source={{uri: thumbnail}}
      style={[cardStyle.thumbnail, styles.marginRight_sm]} />
      <View style={[]}>
          <Text numberOfLines={1} style={[styles.font_md, styles.fontWeight_bold, styles.marginBottom_xsm]}>{name}</Text>
          <Text numberOfLines={1} style={[styles.font_xsm, styles.color_gray, styles.marginBottom_sm]}>{subCategory}</Text>
      </View>
    </View>
  )
}

const cardStyle = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 12,
    height: 200,
  },
  thumbnail: {
    width: 100,
    height: '100%'
  },
})