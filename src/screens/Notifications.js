import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
const Notifications = () => {
    return (
        <View style={[styles.screen, styles.alignItems_center, styles.justifyContent_center]}>
            <Text>Notifications</Text>
        </View>
    );
}

export default Notifications;
