import React from 'react';
import { TouchableNativeFeedback, TouchableOpacity, Platform } from 'react-native';

export const Button = ({ activeOpacity, rippleColor, action, Children: Children }) => {
  
  switch(Platform.OS) {
    case "ios": {
      return (
        <TouchableOpacity activeOpacity={activeOpacity} onPress={action}>
          <View>
            {Children}
          </View>
        </TouchableOpacity>
      )
    }
    case "android": {
      return (
        <TouchableNativeFeedback background={TouchableOpacity.Ripple(rippleColor, true)}>
          <View>
            {Children}
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