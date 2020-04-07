import React from 'react';
import { View, Text, ImageBackground, Dimensions, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import { helpers } from '../helpers';
import { styles } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { ScaleToSize } from '../Animations/index';
const { Contexts: { Profile: { CheckIfWishListed, useProfileDispatch }, actions } } = helpers;
const { profile: { wishlist: { toggle } } } = actions;
export const ServiceCard = ({service, navigation}) => {
  const { id, name, price, media } = service;
  const thumbnail = media.filter(el => el.type === 'image')[0].uri;
  const isWishListed = CheckIfWishListed(id);
  const { dispatch } = useProfileDispatch();
  return (
    <View onPress={() => navigation.navigate("Service", { service })}>
    <ScaleToSize
      style={[cardStyle.container, styles.boxShadow_sm, styles.marginRight_sm, styles.marginBottom_sm]}>
      <ImageBackground source={{uri: thumbnail}} resizeMode="cover"
        style={[cardStyle.thumbnail]} loadingIndicatorSource={<ActivityIndicator animating={true} size={30} color="#ff680a" />}>
        <TouchableOpacity activeOpacity={0.8}
          style={[cardStyle.wish, styles.flexCenter, styles.position_absolute, styles.bg_darkOpacity]}
          onPress={() => dispatch({type: toggle, payload: { wish: service } })}>
          {isWishListed ? (
             <FontAwesomeIcon icon="heart"
             style={{...styles.font_lg, ...styles.color_danger}}
           /> 
          ) : (
            <FontAwesomeIcon icon={["far", "heart"]}
            style={{...styles.font_lg, ...styles.color_white}}
          /> 
          )}
        </TouchableOpacity>
      </ImageBackground>
      <View style={[styles.bg_white,cardStyle.desc, styles.padding_md]}>
        <View style={[styles.row, styles.alignItems_center]}>
          <FontAwesomeIcon icon="star" style={{...styles.marginRight_sm, ...styles.color3}} />
          <Text style={[styles.fontWeight_700, styles.font_sm]}>{4.65}</Text>
        </View>
        <View style={[styles.alignItems_center]}>
          <Text numberOfLines={2} style={[styles.font_sm, styles.marginBottom_sm]}>{name}</Text>
          <Text numberOfLines={1} style={[styles.font_sm, styles.fontWeight_700, styles.marginBottom_sm]}>N {price}</Text>
        </View>
      </View>
    </ScaleToSize>
    </View>
  )
}

const cardStyle = StyleSheet.create({
  container: {
    width: (Dimensions.get('window').width / 2) - 25,
    height: 'auto',
    borderRadius: 5,
  },
  thumbnail: {
    width: '100%',
    height: 200,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    overflow: 'hidden',
  },
  wish: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    padding: 5,
    bottom: '10%',
    left: 5,
  },
  desc: {
    width: '100%',
    maxHeight: 100,
  }
})