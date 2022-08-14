import React from "react";
import Header from "./component/header";
import FeedbackList from "./component/FeedbackList";
// import FeedBackData from "./data/FeedBackData";
import FeedbackStat from "./component/FeedbackStat";
import FeedbackCreate from "./component/FeedbackCreate";
// import { v4 as uuidv4 } from 'uuid'
import Feedbackprovider from "./component/context/FeedbackContext";
function App() {
    // const [feedback, setFeedback] = useState(FeedBackData)
    // const deleteFeedback = (id) => {
    //     if (window.confirm('are you sure of deleting?')) {
    //         setFeedback(feedback.filter((item) => item.id !== id))

    //     }
    // }
    // const addFeedback = (newFeedback) => {
    //     newFeedback.id = uuidv4();
    //     setFeedback([newFeedback, ...feedback])
    // }

    return (
        <Feedbackprovider>
            <Header text="Feedback App" />
            <FeedbackCreate  />
            <FeedbackStat  />
            <div className="container">
                <FeedbackList  />
            </div>
        </Feedbackprovider>
    )
}
export default App