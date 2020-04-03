import React from 'react';
import { View, Text, ImageBackground, Dimensions, StyleSheet } from 'react-native';
import { helpers } from '../helpers';
import { styles } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { Contexts: { Profile: { CheckIfWishListed, useProfileDispatch }, actions } } = helpers;
const { profile: { wishlist: { toggle } } } = actions;
export const ServiceCard = () => {
  const service = {
    id: 1
  }
  const isWishListed = CheckIfWishListed(service.id);
  const { dispatch } = useProfileDispatch();
  return (
    <View style={[cardStyle.container]}>
      <View style={[styles.position_relative]}>
        <ImageBackground source={{uri: 'https://res.cloudinary.com/dx5lp5drd/image/upload/v1575836714/ipnl0svo2eib94hibzvr.jpg'}}
          style={[cardStyle.thumbnail, styles.position_absolute]}
        />
        <TouchableOpacity activeOpacity={0.8}
          style={[cardStyle.wish, styles.position_absolute, styles.bg_darkOpacity]}
          onPress={() => dispatch({type: toggle, payload: { wish: service } })}>
          <FontAwesomeIcon icon={isWishListed ? "heart": ["far", "heart"]}
            style={{...styles.font_lg, ...styles.color_danger}}
          /> 
        </TouchableOpacity>
      </View>
      <View style={[styles.bg_white,cardStyle.desc, styles.padding_md]}>
        <View style={[styles.row, styles.alignItems_center]}>
          <FontAwesomeIcon icon="star" style={{...styles.marginRight_sm, ...styles.color3}} />
          <Text style={[styles.fontWeight_700, styes.font_sm]}>{4.65}</Text>
        </View>
        <View style={[styles.alignItems_center]}>
          <Text numberOfLines={2} style={[styles.font_sm, styles.marginBottom_sm]}>Carex Antibacterial Liquid handler</Text>
          <Text numberOfLines={1} style={[styles.font_sm, styles.fontWeight_700, styles.marginBottom_sm]}># {'5,000'}</Text>
        </View>
      </View>
    </View>
  )
}

const cardStyle = StyleSheet.create({
  container: {
    width: (Dimensions.get('window').width / 2) - 4,
    height: 'auto',
    borderWidth: 1,
    ...styles.border_r_5
  },
  thumbnail: {
    top: 0,
    left: 0,
    width: '100%',
    height: 'auto',
  },
  wish: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    padding: 5,
    bottom: '10%',
    left: 5,
  },
  desc: {
    width: '100%',
    maxHeight: 20,
  }
})