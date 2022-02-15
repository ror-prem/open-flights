import React from 'react'

const ReviewForm = (props) => {
  return(
    <div className='wrapper'>

      <form onSubmit={props.handleSubmit}>
        <div>Have an experience with [AirlineName]? Share your review!</div>

        <div className='field'>
          <input onChange={} type='text' name='title' placeholder='Review Title'></input>
        </div>

        <div className='field'>
          <input type='text' name='description' placeholder='Description'></input>
        </div>

        <div className='field'>
          <div className='rating-container'>
            <div className='rating-title-text'>Rating This Airline</div>
              [Star Rating Goes here]
          </div>
        </div>
        <button type="submit">Submit Review</button>

      </form>
    </div>
  )

}

export default ReviewForm