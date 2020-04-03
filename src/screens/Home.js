import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
const Home = () => {
    return (
        <View style={[styles.screen, styles.alignItems_center, styles.justifyContent_center]}>
            <Text>Home</Text>
        </View>
    );
}

export default Home;
