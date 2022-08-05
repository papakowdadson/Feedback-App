import FeedbackItem from "./feedbackitem"
import React from "react"
function FeedbackList({ feedback, handleDelete }) {
    console.log(feedback)

    if (!feedback || feedback.length === 0) {
        return <div>no feedback</div>
    }
    return (

        <div className="feedback-list">
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />

            )



            )}
        </div>
    )
}

export default FeedbackList