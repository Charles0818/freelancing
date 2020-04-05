import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { styles } from './styles';
export const Container = props => {
    const { style } = props;
    return (
        <SafeAreaView style={[styles.screen, style ? {...style}: '']}>{props.children}</SafeAreaView>
    )
}

export const Section = props => {
    return (
        <View style={{...styles.paddingHorizontal_sm, ...styles.marginBottom_md}}>{props.children}</View>
    )
};