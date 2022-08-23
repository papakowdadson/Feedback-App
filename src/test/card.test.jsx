import reactTestRenderer from 'react-test-renderer'
import Card from '../component/shared/card'

it('creates a card component',()=>{
    const component = reactTestRenderer.create(
        
        <Card></Card>
    )
});