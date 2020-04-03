import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles';
import { Container, Section } from '../Container';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
const Entry = () => {
    return (
        <Container>
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={[styles.padding_md, styles.marginBottom_md, entryStyle.card]}>
                <View style={[styles.row, styles.justifyContent_between, styles.alignItems_center]}>
                    <Image source={{uri: "https://res.cloudinary.com/dx5lp5drd/image/upload/v1575836714/ipnl0svo2eib94hibzvr.jpg" }}
                    style={[entryStyle.avatar]}
                    />
                    <View>
                        <Text numberOfLines={1} style={[styles.color_white, styles.marginBottom_sm, styles.fontWeight_700, styles.font_xsm]}>Welcome back,</Text>
                        <Text numberOfLines={2} style={[styles.color_white, styles.fontWeight_700, styles.font_lg]}>Charles Omoregie</Text>
                    </View>
                </View>
            </LinearGradient>
            <ListItems />
            <View style={[entryStyle.logoutWrapper]}>
                <View style={[entryStyle.logoutBtn]}>
                    <Logout />
                </View>
            </View>
        </Container>
    )
}

const ListItems = () => {
    return (
        <Section>
            <List text="Settings" icon="cog" screen="Settings" />
            <List text="Share Feedback" icon="comment-alt" screen="Feedback" />
        </Section>
    )
}

const List = ({text, icon, screen}) => {
    const navigation = useNavigation();
    return (
        <View style={[ styles.slimBorderBottom ]}>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#a0a0a', false)}
            onPress={() => navigation.navigate(screen)}>
                <View style={[styles.row, styles.alignItems_center, entryStyle.list,]} >
                    <FontAwesomeIcon icon={icon} style={{...styles.marginRight_sm, ...styles.font_md}} />
                    <Text numberOfLines={1} style={[styles.font_md, styles.fontWeight_700]}>{text}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const Logout = () => {
    return (
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#df020211', false)}>
            <View style={[styles.row, styles.padding_md, styles.bg_danger, styles.flexCenter, styles.border_r_5, styles.trans_btn_danger]}>
                <FontAwesomeIcon icon="sign-out-alt" style={{...styles.marginRight_sm, ...styles.color_danger, ...styles.font_md }}/>
                <Text numberOfLines={1} style={[styles.color_danger, styles.font_md]}>Logout</Text>
            </View>
        </TouchableNativeFeedback>
    )
}

const entryStyle = StyleSheet.create({
    card: {
        width: '100%',
        height: 200,
        // ...styles.justifyContent_end
    },

    avatar: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        borderWidth: 1,
        borderColor: '#fff',
    },
    logoutWrapper: {
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        // marginBottom: 36,
    },
    logoutBtn: {
        width: 150,
    },

    list: {
        paddingVertical: 15,
        paddingHorizontal: 15,
    }
    
});

export default Entry;
