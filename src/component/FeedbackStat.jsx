import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Feedbackcontext } from './context/FeedbackContext';


function FeedbackStat() {
  const {feedback}=useContext(Feedbackcontext)

  let average = feedback.reduce((acc, item) => {
    return acc + item.rating;

  }, 0) / feedback.length
  average = average.toFixed(1)
  return (

    <div className='Feedback-stat'>
      <h4>{feedback.length} reviews</h4>
      <h4 className='average-rating'>average rating: {isNaN(average) ? 0 : average} </h4>
    </div>
  )
}
FeedbackStat.propTypes = {
  feedback: PropTypes.array,
}

export default FeedbackStat