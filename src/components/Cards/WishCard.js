import React from 'react';
import { View, Text, ImageBackground, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { helpers } from '../helpers';
import { styles } from '../styles';
import { FadeIn } from '../Animations/index';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
const { Store: { actions: { wishlistActions } } } = helpers;
const { removeFromWishlist } = wishlistActions;

const wishCard  = (props) => {
  const { wish } = props;
  const { id, name, price, media, subCategory, rating } = wish;
  const thumbnail = media.filter(el => el.type === 'image')[0].uri;
  return (
    <FadeIn style={[styles.row, styles.marginBottom_md, styles.boxShadow_sm, cardStyle.container]} >
      <ImageBackground source={{uri: thumbnail}}
      style={[cardStyle.thumbnail, styles.marginRight_sm]} />
      <View style={{width: '60%', ...styles.paddingHorizontal_sm}}>
        <Text numberOfLines={2} style={[styles.font_md, styles.fontWeight_bold, styles.marginBottom_xsm]}>{name}</Text>
        <Text numberOfLines={1} style={[styles.font_xsm, styles.color_gray, styles.marginBottom_sm]}>{subCategory}</Text>
        <View style={[styles.row, styles.justifyContent_between]}>
          <View style={[]}>
            <Text numberOfLines={1} style={[styles.font_xsm, styles.color_gray, styles.marginBottom_sm]}>{price}</Text>
          </View>
          <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple("#a0a0a0", true)} onPress={() =>  null}>
            <View style={[]}>
              <Text style={[styles.padding_md, styles.color_white, styles.font_sm, styles.bg_danger, styles.border_r_5]}>remove</Text>
            </View>
          </TouchableNativeFeedback>
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
});

const mapDispatchToProps = dispatch => 
  bindActionCreators({ removeFromWishlist }, dispatch);

  export default connect(null, mapDispatchToProps)(wishCard);