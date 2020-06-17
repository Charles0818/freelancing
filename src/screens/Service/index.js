import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Section } from '../Container';
import { ajax, Contexts, serviceHelpers, Store } from '../../helpers/index';
import { styles } from '../styles';
import { Spinners, Carousels, utils, Cards, Review, useRating, DisplayReviews } from '../../components/index';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { NetworkError } from '../ErrorScreens'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { services, reviews } from '../../data';
const  { useToggleWishList } = serviceHelpers;
const { actions: { wishlistActions: { removeFromWishlist, addToWishlist } } } = Store;
const { getData, apiKey } = ajax;
const { useSpinner  } = Spinners;
const { ComponentCarousel } = Carousels;
const { ShareButton } = utils;
const { ServiceCard } = Cards;
const { Profile: { CheckIfWishListed, useProfileDispatch }, actions } = Contexts;


const Service = ({navigation, removeFromWishlist, addToWishlist, route: { params: { service } }}) => {
  const { id, name, price, media, subCategory, description, rating } = service;
  const { toggleWishlist, isWishlisted } = useToggleWishList({ removeFromWishlist, addToWishlist, service })
  // const [reviews, setReviews] = useState([]);
  const [similarServices, setSimilarServices] = useState([]);
  const { animating, Spinner, setAnimating } = useSpinner(true);
  const isWishListed = CheckIfWishListed(id);
  const { dispatch } = useProfileDispatch();
  const Slides = media.map((el, key) => {
    const { uri, type } = el;
    console.log(uri)
    switch(type) {
      case 'image': {
        return <Image source={{uri}} style={{width: '100%', height: '100%'}} />;
      }
      case 'video': {
        return <Video source={{uri}} />
      }
      default: {
        throw new Error('Invalid media type!')
      }
    }
  });
  console.log(Slides)
  useEffect(() => {
      let isSubscribed = true;
      const fetchData = async () => {
        try {
          const getReviews = await getData(`${apiKey}/id=${id}`);
          const relatedServices = await getData(`${apiKey}/id=${id}`)
          setReviews(getReviews.reviews);
          setSimilarServices(relatedServices);
          setAnimating(false)
        } catch (err) {
          console.log(err);
          setAnimating(false);
        }
      }
      if(isSubscribed) fetchData();
      return () => isSubscribed = false
  }, []);
  // if(animating) return <NetworkError />;
  return (
    <Container>
      <ScrollView alwaysBounceVertical={true}>
        <View style={[styles.position_relative, serviceStyle.thumbnailWrapper]}>
          <View style={[styles.position_absolute, serviceStyle.thumbnail]} >
            <Image source={{uri: media[0].uri}} style={{width: '100%', height: '100%'}} />
          </View>
          <View style={[styles.row, {top: 20}, styles.justifyContent_between, styles.alignItems_center, styles.padding_md]}>
            <TouchableOpacity activeOpacity={0.8}
              style={[styles.padding_sm, serviceStyle.roundBtn, styles.alignItems_center, styles.justifyContent_center]}
              onPress={() => navigation.goBack()}>
              <FontAwesomeIcon icon="backward" style={{...styles.color_white}} />
            </TouchableOpacity>
            <View style={[styles.row, styles.alignItems_center]}>
              <View style={[serviceStyle.roundBtn]}>
                <ShareButton />
              </View>
              <TouchableOpacity activeOpacity={0.8}
                style={[serviceStyle.roundBtn, styles.position_absolute, styles.bg_darkOpacity]}
                onPress={toggleWishlist}>
                {isWishlisted ? (
                  <FontAwesomeIcon icon="heart"
                  style={{...styles.font_lg, ...styles.color_danger}}
                /> 
                ) : (
                  <FontAwesomeIcon icon={["far", "heart"]}
                  style={{...styles.font_lg, ...styles.color_white}}
                /> 
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Section style={[styles.bg_white, styles.marginBottom_md, styles.paddingVertical_md, styles.slimBorderBottom]}>
          <Text numberOfLines={2} style={[styles.font_md, styles.fontWeight_bold]}>{name}</Text>
          <Text numberOfLines={1} style={[styles.color_gray, styles.marginBottom_sm]}>{subCategory}</Text>
          <View style={[styles.row, styles.alignItems_center, styles.marginRight_sm]}>
            <FontAwesomeIcon icon="star" style={{...styles.color3, ...styles.font_sm, ...styles.marginRight_xsm}} />
            <Text style={[styles.fontWeight_700, styles.font_xsm]}>{rating}</Text>
          </View>
          <View style={[styles.row, styles.justifyContent_between, styles.marginBottom_sm]}>
            <View style={[styles.row, styles.alignItems_center]}>
              <View style={[styles.row, styles.alignItems_center, styles.marginRight_sm]}>
                <FontAwesomeIcon icon="clock" style={{...styles.color3, ...styles.font_sm, ...styles.marginRight_xsm}} />
                <Text style={[styles.fontWeight_700, styles.font_xsm]}>{14} mins</Text>
              </View>
              <View style={[styles.row, styles.alignItems_center, styles.marginRight_sm]}>
                <FontAwesomeIcon icon="map-marked" style={{...styles.color3, ...styles.font_sm, ...styles.marginRight_xsm}} />
                <Text style={[styles.fontWeight_700, styles.font_xsm]}>{4.1} km</Text>
              </View>
            </View>
            <View style={[styles.row, styles.alignItems_center]}>
              <Text style={[styles.color_gray, styles.font_sm, styles.marginRight_sm]}>Price:</Text>
              <Text style={[styles.font_md, styles.fontWeight_700]}>N {price}</Text>
            </View>
          </View>
        </Section>
        <View style={[styles.bg_white, styles.marginBottom_md]}>
          <Section>
            <Text numberOfLines={1} style={[styles.font_md, styles.fontWeight_bold, styles.paddingVertical_sm, styles.slimBorderBottom, styles.marginBottom_sm]}>Description</Text>
            <Text numberOfLines={10} style={[]}>{description}</Text>
          </Section>
        </View>
        {animating ? Spinner : (
          <View>
            <Section>
              <DisplayReviews reviews={reviews} />
            </Section>
            <Section>
              <SimilarService services={services} category={subCategory} navigation={navigation} />
            </Section>
          </View>
        )}
      </ScrollView>
    </Container>
  )
}

const SimilarService = ({services, category, navigation}) => {
  const Services = services.map((service, key) => <ServiceCard key={key} service={service} navigation={navigation} />);
  return (
    <View style={{paddingVertical: 10}}>
      <View style={[styles.row, styles.justifyContent_between, styles.alignItems_center, styles.marginBottom_md]} >
        <Text numberOfLines={1} style={[styles.font_lg, styles.fontWeight_700]}>You may also like these</Text>
        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate("Services", { category })}
          style={[styles.padding_md, styles.bg_color1Opacity, styles.border_r_5]}>
          <Text style={[styles.color1, styles.fontWeight_700]}>See All</Text>
        </TouchableOpacity>
      </View>
      <ComponentCarousel slides={Services} bullet={false} autoSlide={false} dimensions={{width: '100%', height: 'auto'}} />
    </View>
  )
}

const serviceStyle = StyleSheet.create({
  thumbnailWrapper: {
    width: '100%',
    height: 250,
  },
  thumbnail: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  roundBtn: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    padding: 5,
    ...styles.flexCenter,
  },
})

const mapDispatchToProps = dispatch => 
  bindActionCreators({ removeFromWishlist, addToWishlist }, dispatch);

  export default connect(null, mapDispatchToProps)(Service);