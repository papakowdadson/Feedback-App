import renderer from "react-test-renderer";
import Header from "../component/header";
import {screen} from '@testing-library/react'


describe('the nav bar ', () => { 
    it('testing header',()=>{
        const component=renderer.create(
        <Header  text='hi there' bgColor='blue' textColor='white'></Header>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    });
    
    it('testing words',()=>{
        renderer.create(
            <Header text='hi there'></Header>
        );
        const text =screen.findByText(/'hi there'/i);
        expect(text).toBeInTheDocument;
    });
 })
