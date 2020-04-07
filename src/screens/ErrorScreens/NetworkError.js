import React from 'react';
import { View, Text } from 'react-native';
import { Container } from '../Container';
import { styles } from '../styles';
const NetworkError = () => {
    return (
        <Container>
            <View style={[]}>style={[styles.flexCenter]}>
                <View style={[]}>style={[styles.flexCenter]}
                    <Text style={[]}>Network Error</Text>
                </View>
            </View>
        </Container>
    )
}

export default NetworkError;
