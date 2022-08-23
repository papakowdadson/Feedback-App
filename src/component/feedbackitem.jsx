import React, { useContext } from "react"
import { FaTimes,FaEdit } from 'react-icons/fa'
import { Feedbackcontext } from "./context/FeedbackContext"
import Card from "./shared/card"
function FeedbackItem({ item}) {
    const {deleteFeedback,editFeedback}=useContext(Feedbackcontext)

    return (
        <Card >
            <div className="item-upper">
                <div className="num-display ">{item.rating}</div>
                <div className="close">
                <button onClick={()=>{editFeedback(item)}}><FaEdit color="#0A0143"/></button>
                <button onClick={() => deleteFeedback(item.id)} ><FaTimes color="#0A0143" /></button>
                </div>
            </div>
            <div  className="text-display">{item.text}</div>


        </Card>

    )
}

export default FeedbackItem