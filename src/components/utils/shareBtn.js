import React from 'react';
import { Share, TouchableNativeFeedback } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const ShareButton = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  
  return (
    <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#a0a0a', false)}
      style={[styles.padding_sm]} onPress={onShare}>
      <FontAwesomeIcon icon="share" style={{...styles.font_md, ...styles.color_white}} />
    </TouchableNativeFeedback>
  )
}

export default ShareButton;
