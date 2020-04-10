import React from 'react';
import { View, Text } from 'react-native';
import { Container } from '../Container';
import { styles } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TouchableHighlight } from 'react-native-gesture-handler';
const NetworkError = () => {
  return (
    <Container>
      <View style={[styles.padding_lg]}>
        <View style={[styles.flexCenter]}>
          <Text style={[styles.font_md, styles.marginBottom_lg]}>No Connection</Text>
          <View style={[styles.marginBottom_lg]}>
            <FontAwesomeIcon icon="wifi" style={{...styles.font_md, ...styles.color_gray}} />
          </View>
          <Text style={[styles.color_gray, styles.font_md, styles.marginBottom_lg]}>An internet error occured, please try again</Text>
          <TouchableHighlight activeOpacity={0.6} style={[styles.bg_gray, styles.padding_md]}>
            <Text style={[styles.uppercase, styles.fontWeight_700]}>try again</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Container>
  )
}

export default NetworkError;
