import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableHighlight, TextInput } from 'react-native';
import { Container, Section } from '../Container';
import { services } from '../../data';
import { Cards, Spinners } from '../../components';
import { styles } from '../styles';
import { useFormInput } from '../../helpers/index';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { LandScapeServiceCard } = Cards;
const { useSpinner } = Spinners;
const Services = ({ navigation }) => {
  const { input, handleUserInput: setSearch, isValid } = useFormInput();
  const { animating, setAnimating, Spinner } = useSpinner(true);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TextInput style={[ServiceStyle.searchField, styles.slimBorder, styles.font_md, styles.fonWeight_bold]}
          value={input} onChangeText={setSearch} placeholder="search food"
        />
      ),
    })
  });

  useEffect(() => {
    let isSubscribed = true;
    const getServices = async () => {
      try {
        const timeout = await setTimeout(() => {
          setAnimating(false);
          console.log('it is finished')
        }, 1500);
        // return clearTimeout(timeout);
      } catch (err) {
        console.log(err);
        setAnimating(false)
      }
    }
    if(isSubscribed) getServices();
    return () => isSubscribed = false;
  },[]);
  if(animating) return Spinner;
  return (
    <Container>
      <Section>
        <View style={[styles.marginTop_md]}>
        <FlatList data={services}
          renderItem={({ item, index, separators }) => (
            <TouchableOpacity
              style={[styles.slimBorderTop, styles.paddingTop_sm]}
              key={index}
              activeOpacity={0.6}
              underlayColor={"#a0a0a0"}
              onPress={() => navigation.navigate("Service", { service: item })}>
              <LandScapeServiceCard service={item} key={index} />
            </TouchableOpacity>

          )}
          keyExtractor={(item, index) => index.toString()}
        />
        </View>
      </Section>
    </Container>
  )
}

const ServiceStyle = StyleSheet.create({
  searchField: {
    width: 220,
    height: 40,
    paddingBottom: 10,
    paddingRight: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginRight: 5,
    textAlign: 'center',
  }
})

export default Services;