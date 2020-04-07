import React from 'react';
import { View, StyleSheet, FlatList, TouchableHighlight, TextInput } from 'react-native';
import { Container, Section } from '../Container';
import { services } from '../../data';
import { Cards } from '../../components';
import { styles } from '../styles';
import { useFormInput } from '../../helpers/index';
import { useNavigation } from '@react-navigation/core';

const { LandScapeServiceCard } = Cards;

const Services = ({ navigation }) => {
  const { input, handleUserInput: setSearch, isValid } = useFormInput();
  // const navigation = useNavigation()
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TextInput style={[ServiceStyle.searchField, styles.slimBorder, styles.font_md, styles.fonWeight_bold]}
          value={input} onChangeText={setSearch} placeholder="search food"
        />
      )
    })
  })
  return (
    <Container>
      <Section>
        <View style={[styles.marginTop_md]}>
        <FlatList data={services}
          renderItem={({ item, index, separators }) => (
            <TouchableHighlight
              style={[styles.slimBorderTop, styles.paddingTop_sm]}
              key={index}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}
              onPress={() => navigation.navigate("Service", { service: item })}>
              <LandScapeServiceCard service={item} key={index} />
            </TouchableHighlight>

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