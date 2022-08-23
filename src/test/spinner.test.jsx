import reactTestRenderer from "react-test-renderer";
import renderer from "react-test-renderer";
import Spinner from "../component/shared/spinner";

it('creates a loading component',()=>{
    reactTestRenderer.create(
        
       <Spinner></Spinner>
    )
});