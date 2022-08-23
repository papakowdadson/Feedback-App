import reactTestRenderer from "react-test-renderer";
import { screen } from "@testing-library/react";
import RatingSelect from "../component/RatingSelect";
import Feedbackprovider from "../component/context/FeedbackContext";

it('Testing Rating', () => {
    reactTestRenderer.create(
        <Feedbackprovider>
            <RatingSelect></RatingSelect>
        </Feedbackprovider>)

    const numberOfRating = screen.queryAllByRole('listitem')
    expect(numberOfRating.length).toBe(10);
})

