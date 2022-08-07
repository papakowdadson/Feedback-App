import React, { useState } from "react";
import Header from "./component/header";
import FeedbackList from "./component/FeedbackList";
import FeedBackData from "./data/FeedBackData";
import FeedbackStat from "./component/FeedbackStat";
import FeedbackCreate from "./component/FeedbackCreate";
import { v4 as uuidv4 } from 'uuid'
function App() {
    const [feedback, setFeedback] = useState(FeedBackData)
    const deleteFeedback = (id) => {
        if (window.confirm('are you sure of deleting?')) {
            setFeedback(feedback.filter((item) => item.id !== id))

        }
    }
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback])
    }

    return (
        <>
            <Header text="Feedback App" />
            <FeedbackCreate addFeedback={addFeedback} />
            <FeedbackStat feedback={feedback} />
            <div className="container">
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            </div>
        </>
    )
}
export default App