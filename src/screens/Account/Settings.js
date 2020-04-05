import React from 'react';
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Container, Section } from '../Container';
import { styles } from '../styles';
const Settings = () => {
    return (
        <Container>
            <ListItems />
        </Container>
    );
}

const ListItems = () => {
    return (
        <Section>
            <List text="Settings" icon="cog" screen="Settings" />
            <List text="Share Feedback" icon="comment-alt" screen="Feedback" />
            <List text="Settings" icon="cog" screen="Settings" />
            <List text="Share Feedback" icon="comment-alt" screen="Feedback" />
        </Section>
    )
}

const List = ({text, icon, screen, action}) => {
    return (
        <View style={[ styles.slimBorderBottom ]}>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#a0a0a', false)}
            onPress={action}>
                <View style={[styles.row, styles.alignItems_center, settingStyle.list]} >
                    <FontAwesomeIcon icon={icon} style={{...styles.marginRight_sm, ...styles.font_md}} />
                    <Text numberOfLines={1} style={[styles.font_md, styles.fontWeight_700]}>{text}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const settingStyle = StyleSheet.create({
    list: {
        paddingVertical: 20,
        paddingHorizontal: 10,
    }
})
export default Settings;
