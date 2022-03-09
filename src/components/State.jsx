import React from 'react'
import PropTypes from 'prop-types'

function State({ feedback }) {

  let avg = feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) / feedback.length
  avg = avg.toFixed(1).replace(/[.,]0$/, '')

  return (
    <>
      <div className="feedback-states">
        <span>{feedback.length} Reviews</span>
        <span> {isNaN(avg) ? 0 : avg} average </span>
      </div>
    </>
  )
}

State.prototype = {
  feedback: PropTypes.array.isRequired,
}

export default State