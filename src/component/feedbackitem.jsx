import React, { useContext } from "react"
import { FaTimes } from 'react-icons/fa'
import { Feedbackcontext } from "./context/FeedbackContext"
import Card from "./shared/card"
function FeedbackItem({ item}) {
    const {deleteFeedback}=useContext(Feedbackcontext)

    return (
        <Card >
            <div className="item-upper">
                <div className="num-display ">{item.rating}</div>
                <button onClick={() => deleteFeedback(item.id)} className="close"><FaTimes /></button>
            </div>
            <div className="text-display">{item.text}</div>


        </Card>

    )
}

export default FeedbackItem