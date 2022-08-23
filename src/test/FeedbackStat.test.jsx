import reactTestRenderer from "react-test-renderer";
import { Screen } from "@testing-library/react";
import FeedbackStat from "../component/FeedbackStat";
import Feedbackprovider from "../component/context/FeedbackContext";

const mockFeedbackStat=()=>{
    return(
    <Feedbackprovider>
        <FeedbackStat></FeedbackStat>
    </Feedbackprovider>
   )
}

it('FeedbackTest Testing',()=>{
    reactTestRenderer.create(<mockFeedbackStat></mockFeedbackStat>)

})