import React from 'react'
import Card from './shared/card'

function FeedbackCreate() {
  return (
    <Card >
        {/* continue with css for create screen */}
        <div className='FeedbackCreate'>
        <div>Create a new feedback from this form</div>
        <div >
            <ul className='rating'>
                <li>
                    <input  type='radio' />
                </li>
                <li>
                    <input  type='radio' />
                </li>
                <li>
                    <input  type='radio' />
                </li>
                <li>
                    <input  type='radio' />
                </li>
                <li>
                    <input  type='radio' />
                </li>
                <li>
                    <input  type='radio' />
                </li>
                <li>
                    <input type='radio' />
                </li>
                <li>
                    <input type='radio' />
                </li>
            </ul>


        </div>
        <div >
            <input type="text" />
            <button type="submit">Send Feedback</button>
        </div>
        </div>
    </Card>
  )
}

export default FeedbackCreate