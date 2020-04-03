import React from 'react';
import { View, Button } from 'react-native';
import useRating from './rating';
import { styles } from '../styles';

const Review = ({review}) => {
  const { comment, rating, date, user: { firstName, lastName } } = review;
  const { RateWithStar } = useRating({disabled: true, initial: rating});
  console.log(ratings);
  return (
    <View style={[styles.marginBotom_md, styles.paddingBottom_md]} >
      <View style={[styles.marginBottom_sm]} >
        {RateWithStar}
      </View>
      <Text style={[styles.font_sm, styles.fontWeight_700, style.marginBottom_sm]} >
        {ratingMeaning(rating)}
      </Text>
      <Text style={[styles.font_sm, styles.marginBottom_sm]} >{comment}</Text>
      <View style={[styles.row, styles.alignItems_center]} >
        <Text style={[styles.color_gray, styles.font_sm, styles.marginRight_sm]} >{date}</Text>
        <Text style={[styles.color_gray, styles.font_sm]} >by {`${firstName} ${lastName}`}</Text>
      </View>
    </View>
  )
}



const DisplayRatings = ({reviews}) => {
  const { RateWithStar } = useRating({disabled: true})
  return (
    <View style={[styles.marginBottom_md]} >
      <View style={[styles.row, styles.justifyContent_between, styles.alignItems_center, styles.marginBotom_md]} >
        <Text style={[styles.paddingTop_md, styles.paddingBottom_sm, styles.font_md, styles.uppercase]} >
          Customer Feedback
        </Text>
        <Button title="SEE ALL"style={[styles.padding_md, styles.border_r_5, styles.color1, styles.bg_color1_opacity, styles.font_md, styles.fontWeight_700]} />
      </View>
      <View style={[styles.row, styles.justifyContent_between]} >
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

export default DisplayRatings
