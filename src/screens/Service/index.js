import React, { useEffect } from 'react';
import { View, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import { Container, Section } from '../Container';
import { ajax } from '../../helpers/index';
import { styles } from '../styles';
import { Spinners, Carousels, utils } from '../../components/index';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
const { getData } = ajax;
const { useSpinner  } = Spinners;
const { ComponentCarousel } = Carousels;
const { ShareButton } = utils;

const media = [
  {
      type: 'image',
      uri: 'https://res.cloudinary.com/dx5lp5drd/image/upload/v1575836714/ipnl0svo2eib94hibzvr.jpg',
  },
  {
      type: 'video',
      uri: 'https://res.cloudinary.com/dx5lp5drd/image/upload/v1575836714/ipnl0svo2eib94hibzvr.jpg'
  }
]
const Service = ({navigation, route: { params }}) => {
  const [service, setService] = useState({});
  const { animating, Spinner, setAnimating } = useSpinner(true);
  const slides = media.map(el => {
      const { uri, type } = el
      switch(type) {
          case 'image': {
              return <ImageBackground source={{uri}} style={{width: '100%', height: 'auto'}} />
          }
          case 'video': {
              return <Video />
          }
          default: {
              throw new Error('Invalid media type!')
          }
      }
  })
  useEffect(() => {
      let isSubscribed = true;
      const getService = async () => {
          try {
              const response = await getData(`${apiKey}/id=${params.id}`);
              setService(response.service);
              setAnimating(false)
          } catch (err) {
              console.log(err);
          }
      }
      if(isSubscribed) getService();
      return () => isSubscribed = false
  }, []);
  if(animating) return Spinner;

  const {  } = service;
  return (
    <Container>
      <ScrollView alwaysBounceVertical={true}>
        <View style={[styles.position_relative]}>
          <View style={[styles.position_absolute, serviceStyle.thumbnail]} >
            <ComponentCarousel slides={slides} dimensions={{width: '100%', height: 'auto'}} />
          </View>
          <View style={[styles.row, styles.justifyContent_between, styles.alignItems_center, styles.padding_md]}>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#a0a0a', false)}
              style={[styles.padding_sm, styles.alignItems_center, styles.justifyContent_center]}
              onPress={() => navigation.goBack()}>
              <FontAwesomeIcon icon="backward" style={{...styles.color_white}} />
            </TouchableNativeFeedback>
            <View style={[styles.row, styles.alignItems_center]}>
              <ShareButton />
            </View>
          </View>
        </View>
        <Section>
          
        </Section>
      </ScrollView>
    </Container>
  )
}


const serviceStyle = StyleSheet.create({
  thumbnail: {
    top: 0,
    left: 0,
  }
})

export default Service;