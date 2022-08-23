import {Screen} from "@testing-library/react";
import reactTestRenderer from "react-test-renderer";
import Feedbackprovider from "../component/context/FeedbackContext";

const mockFeedbackContext=jest.fn();


it('Feedback context',()=>{
    const component = reactTestRenderer.create(
        <Feedbackprovider children={'context children'}></Feedbackprovider>
    );
    const childrennumber = screen.findByText(/[context children]/i);
    expect(childrennumber).toBeInTheDocument();
})

