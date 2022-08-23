import reactTestRenderer from "react-test-renderer";
import FeedbackItem from "../component/feedbackitem";
import {screen} from "@testing-library/react"
import Feedbackprovider from "../component/context/FeedbackContext";




it('testing feedback elements',()=>{
    const item={
        id:1,
        rating:9,
        text:'jksakfjsifkjsifjsflkjifsjfdisjfsoifj'
    }
    const component = reactTestRenderer.create(
        <Feedbackprovider >
        <FeedbackItem item={item}></FeedbackItem>
        </Feedbackprovider>
    );
    const itemtext =screen.findAllByText(/jksakfjsifkjsifjsflkjifsjfdisjfsoifj/i);
    expect(itemtext).toBeInTheDocument;
    
});

it('Testing the number of Button',()=>{
    const buttons = screen.queryAllByRole('button');
    expect(buttons.length).toBe(2);
})


