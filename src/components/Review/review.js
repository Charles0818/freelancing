import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import useRating from './rating';
import { styles } from '../styles';

const Review = ({review}) => {
  const { comment, rating, date, user: { firstName, lastName } } = review;
  const { RateWithStar } = useRating({disabled: true, initial: rating});
  console.log(rating);
  return (
    <View style={[styles.marginBottom_sm, styles.boxShadow_sm, styles.border_r_5, styles.bg_white, styles.padding_md]}>
      <View style={[styles.row, styles.justifyContent_between, styles.alignItems_center, styles.marginBottom_sm]} >
        {RateWithStar}
        <Text style={[styles.color_gray, styles.font_sm, styles.marginRight_sm]} >{date}</Text>
      </View>
      <Text style={[styles.font_sm, styles.fontWeight_700, styles.marginBottom_sm]} >
        {ratingMeaning(rating)}
      </Text>
      <Text style={[styles.font_sm, styles.marginBottom_sm]} >{comment}</Text>
      <View style={[styles.row, styles.alignItems_center]} >
       
        <Text style={[styles.color_gray, styles.font_sm]} >by {`${firstName} ${lastName}`}</Text>
      </View>
    </View>
  )
}



const DisplayReviews = ({reviews}) => {
  const { RateWithStar } = useRating({disabled: true})
  return (
    <View style={[styles.marginBottom_md]} >
      <View style={[styles.row, styles.justifyContent_between, styles.alignItems_center, styles.marginBottom_md]} >
        <Text style={[styles.font_md, styles.uppercase, styles.fontWeight_700]} >
          Customer Feedback
        </Text>
        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate("Reviews", { reviews })}
          style={[styles.padding_md, styles.bg_color1Opacity, styles.border_r_5]}>
          <Text style={[styles.color1, styles.fontWeight_700]}>See All</Text>
        </TouchableOpacity>
      </View>
      <View>
        {reviews.length === 0 ? (
          <View style={[styles.justifyContent_between, styles.alignItems_center]} >
            <Text style={[styles.font_lg, styles.color_gray, styles.marginBotom_md]} >
              This Product does not have any review
            </Text>
            {RateWithStar}
          </View>
        ): reviews.map((review, index) => (
          <Review review={review} key={index} />
        ))}
      </View>
    </View>
  )
}

const ratingMeaning = (rating) => {
  switch(rating) {
    case 0:
      return ""
    case 1:
      return 'Terrible'
    case 2:
      return "Bad"
    case 3:
      return "OK"
    case 4:
      return 'Good'
    case 5:
      return "Love it"
    default:
      throw new Error('Invalid rating value, must be between 0 and 5')
  }
}

export default DisplayReviews
