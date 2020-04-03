import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from '../../styles/main.style'
export const MediumSpinner = ({animating}) => {
    return (
        <View style={[{flex: 1}, styles.flexCenter, styles.bg_white]}>
            <ActivityIndicator animating={animating} size={70} color="#ff680a" />
        </View>
    )
}

export const useSpinner = (bool) => {
    const [animating, setAnimating] = useState(bool ? bool : false);
    const Spinner = <MediumSpinner animating={animating} />
    return { animating, setAnimating, Spinner }
}