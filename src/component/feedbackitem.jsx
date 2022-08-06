import React from "react"
import { FaTimes } from 'react-icons/fa'
import Card from "./shared/card"
function FeedbackItem({ item, handleDelete }) {

    return (
        <Card >
            <div className="item-upper">
                <div className="num-display ">{item.rating}</div>
                <button onClick={() => handleDelete(item.id)} className="close"><FaTimes /></button>
            </div>
            <div className="text-display">{item.text}</div>


        </Card>

    )
}

export default FeedbackItem