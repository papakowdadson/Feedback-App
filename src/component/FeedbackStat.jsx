import React from 'react'
import PropTypes from 'prop-types'


function FeedbackStat({feedback}) {
    
    let average= feedback.reduce((acc,item)=>{
        return acc+item.rating;
        
    },0)/feedback.length
    average=average.toFixed(1)
  return (
    
    <div className='Feedback-stat'>
        <h4>{feedback.length} reviews</h4>
        <h4 className='average-rating'>average rating: {isNaN(average) ? 0: average} </h4>
    </div>
  )
}
FeedbackStat.propTypes={
    feedback:PropTypes.array,
}

export default FeedbackStat