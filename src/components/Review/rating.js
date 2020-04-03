import React, { useState } from 'react';
import StarRating from 'react-native-star-rating';
import PropTypes from 'prop-types';
// import prop from 'prop'
const Rating = ({rating, setRating, disabled}) => {
    return (
        <StarRating rating={rating} maxStars={5} fullStarColor="#e7e300"
        starStyle={} selectedStar={(rating) => setRating(rating)} disabled={disabled} />
    )
}

const useRating = ({disabled, initial}) => {
    const [rating, setRating] = useState(initial ? initial : 0);
    const RateWithStar = <Rating rating={rating} setRating={setRating} disabled={disabled} />
    return { RateWithStar, rating }
}

Rating.propTypes = {
    rating: PropTypes.number.isRequired,
    disabled: PropTypes.bool,
}

Rating.defaultProps = {
    disabled: false
}

export default useRating;