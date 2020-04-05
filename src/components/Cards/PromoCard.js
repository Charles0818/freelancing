import React from 'react';
import { View, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PromoCard = ({service}) => {
    const { image, serviceId } = service;
    const navigation = useNavigation();
    return (
        <View onPress={() => navigation.navigate('Service', {serviceId})}>
            <ImageBackground source={{uri: image}} style={[cardStyles.container]} />
        </View>
    );
}

const cardStyles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - 20,
        height: 180,
        borderRadius: 5,
        overflow: 'hidden',
    }
})

export default PromoCard;
