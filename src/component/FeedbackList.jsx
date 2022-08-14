import FeedbackItem from "./feedbackitem"
import React, { useContext } from "react"
import { Feedbackcontext } from "./context/FeedbackContext"
import Spinner from "./shared/spinner"
function FeedbackList() {

    const { feedback,isLoading } = useContext(Feedbackcontext)
    console.log(feedback)

    if (!isLoading && (!feedback || feedback.length === 0)) {
        return (<div>
                <h5>no feedback yet</h5>

        </div>)
    }
    return isLoading ? <Spinner/>:
    (

        <div className="feedback-list">
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} />

            )



            )}
        </div>
    )
}

export default FeedbackList