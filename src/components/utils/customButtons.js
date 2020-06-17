import React from 'react';
import { View, TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native';
import PropTypes from 'prop-types';
export const Button = ({ activeOpacity, rippleColor, action, children }) => {
  
  switch(Platform.OS) {
    case "ios": {
      return (
        <TouchableOpacity activeOpacity={activeOpacity} onPress={action}>
          <View>
            {children}
          </View>
        </TouchableOpacity>
      )
    }
    case "android": {
      return (
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(rippleColor, false)} onPress={action}>
          <View>
            {children}
          </View>
        </TouchableNativeFeedback>
      )
    }
    default:
    return (
      <TouchableOpacity activeOpacity={activeOpacity} onPress={action}>
        <View>
          {Children}
        </View>
      </TouchableOpacity>
    )
  }
}

Button.propTypes =  {
  action: PropTypes.func.isRequired,
  rippleColor: PropTypes.string,
  activeOpacity: PropTypes.number,
}

Button.defaultPropTypes = {
  rippleColor: "#a0a0a0",
  activeOpacity: 0.6
}