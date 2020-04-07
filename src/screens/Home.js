import React, { useState } from 'react';
import { View, Image, Text, ScrollView, TextInput, TouchableNativeFeedback, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Container, Section } from './Container';
import { Spinners, Cards, Carousels } from '../components/index';
import { serviceCategories, services, RecommendedServices as Proposed, promotionalServices} from '../data';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
const { ServiceCard, PromoCard } = Cards;
const { useImagePreload } = Spinners;
const { ComponentCarousel } = Carousels;
const Home = ({navigation}) => {
  const [search, updateSearch] = useState('');
  console.log(search);
  return (
    <Container>
      <ScrollView>
      <Section>
        <View style={[ homeStyle.searchContainer, styles.position_relative, styles.marginTop_sm]}>
          <TextInput
            style={[styles.padding_md, homeStyle.searchField, styles.paddingRight_lg, styles.slimBorder, styles.border_r_5, styles.font_md, styles.fontWeight_700]}
            placeholder="Search for any services..."
            onChangeText={updateSearch}
            value={search}
          />
          <View style={[styles.position_absolute, styles.border_r_5, homeStyle.searchIcon]}>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple('#a0a0a', false)}>
              <View style={[styles.padding_md]}>
                <FontAwesomeIcon icon="search" />
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </Section>
      {/* <View style={[styles.boxShadow_sm, styles.marginBottom_md]}>
        <ComponentCarousel duration={10000} dimensions={{width: '100%', height: 'auto'}}
          slides={promotionalServices.map((service, key) => <PromoCard key={key} service={service} />)}
        />
      </View> */}
      <Section>
        <View style={[styles.boxShadow_sm]}>
          <Text numberOfLines={1} style={[styles.font_lg, styles.fontWeight_700, styles.marginBottom_md]}>Services</Text>
          <View style={[styles.row, styles.wrap, styles.slimBorderBottom]}>
            {serviceCategories.map((service, key) => <Service key={key} service={service} />)}
            <View style={[styles.marginRight_md, styles.alignItems_center, styles.marginBottom_md]}>
              <View style={[homeStyle.serviceImage, styles.marginBottom_sm, styles.bg_whiteOpacity, styles.alignItems_center, styles.justifyContent_center]}>
                <FontAwesomeIcon icon="ellipsis-h" 
                style={{ ...styles.color1, ...styles.font_md}}/>
              </View>
              <Text numberOfLines={1}
              style={[styles.fontWeight_700, styles.capitalize, styles.font_sm]}>more</Text>
            </View>
          </View>
        </View>
      </Section>
      {Proposed.map((categories, key) => <RecommendedServices key={key} categories={categories} navigation={navigation} />)}
      </ScrollView>
    </Container>
  );
}

const RecommendedServices = ({categories, navigation}) => {
  const { category, services } = categories;
  const Services = services.map((service, key) => <ServiceCard key={key} service={service} navigation={navigation} />);
  return (
    <Section style={[styles.bg_white, styles.paddingVertical_md]}>
      <View style={[styles.row, styles.justifyContent_between, styles.alignItems_center, styles.marginBottom_md]} >
        <Text numberOfLines={1} style={[styles.font_lg, styles.fontWeight_700]}>{category}</Text>
        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate("Services", { category })}
          style={[styles.padding_md, styles.bg_color1Opacity, styles.border_r_5]}>
          <Text style={[styles.color1, styles.fontWeight_700]}>More</Text>
        </TouchableOpacity>
      </View>
      <ComponentCarousel slides={Services} bullet={false} autoSlide={false} dimensions={{width: '100%', height: 'auto'}} />
    </Section>
  )
}

const Service = ({service}) => {
  const { name, image } = service;
  // const { setIsLoading, ImagePreLoad } = useImagePreload();
  return (
    <View style={[homeStyle.service, styles.alignItems_center, styles.marginBottom_md]}>
      <View style={[]}>
        <Image source={{uri: image}}
        style={[homeStyle.serviceImage, styles.marginBottom_sm]}/>
      </View>
      <Text numberOfLines={2}
      style={[styles.fontWeight_700, styles.capitalize, styles.font_sm]}>{name}</Text>
    </View>
  )
}

const homeStyle = StyleSheet.create({
  searchContainer: {
    height: 50,
  },

  searchField: {
    width: '100%',
    height: '100%'
  },
  searchIcon: {
    top: 5,
    right: 2,
    height: '100%',
  },

  service: {
    width: 80,
    maxHeight: 80,
    marginRight: 10,
  },
  serviceImage: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
})

export default Home;
