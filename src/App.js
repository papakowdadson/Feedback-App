import React,{ useState } from "react";
import Header from "./component/header";
import FeedbackList from "./component/FeedbackList";
import FeedBackData from "./data/FeedBackData";
import FeedbackStat from "./component/FeedbackStat";
import FeedbackCreate from "./component/FeedbackCreate";
function App() {
    const [feedback, setFeedback] = useState(FeedBackData)
    const deleteFeedback = (id) => {
        if (window.confirm('are you sure of deleting?')) {
            setFeedback(feedback.filter((item) => item.id !== id))

        }
    }

    return (
        <>
            <Header text="Feedback UI" />
            <FeedbackCreate/>
            <FeedbackStat feedback={feedback}/>
            <div className="container">
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            </div>
        </>
    )
}
export default App