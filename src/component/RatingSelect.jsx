import React, { useState } from 'react'

function RatingSelect({ select }) {
    const [selected, setSelected] = useState(2)
    const handleSelect = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
        console.log(+e.currentTarget.value)
    }
    return (

        <div >
            <ul className='rating'>
                <li>
                    <input type='radio' id='radio1' name='rating' value='1' checked={selected === 1} onChange={handleSelect} />
                    <label htmlFor="radio1">1</label>
                </li>
                <li>
                    <input type='radio' id='radio2' name='rating' value='2' checked={selected === 2} onChange={handleSelect} />
                    <label htmlFor="radio2">2</label>
                </li>
                <li>
                    <input type='radio' id='radio3' name='rating' value='3' checked={selected === 3} onChange={handleSelect} />
                    <label htmlFor="radio3">3</label>
                </li>
                <li>
                    <input type='radio' id='radio4' name='rating' value='4' checked={selected === 4} onChange={handleSelect} />
                    <label htmlFor="radio4">4</label>
                </li>
                <li>
                    <input type='radio' id='radio5' name='rating' value='5' checked={selected === 5} onChange={handleSelect} />
                    <label htmlFor="radio5">5</label>
                </li>
                <li>
                    <input type='radio' id='radio6' name='rating' value='6' checked={selected === 6} onChange={handleSelect} />
                    <label htmlFor="radio6">6</label>
                </li>
                <li>
                    <input type='radio' id='radio7' name='rating' value='7' checked={selected === 7} onChange={handleSelect} />
                    <label htmlFor="radio7">7</label>
                </li>
                <li>
                    <input type='radio' id='radio8' name='rating' value='8' checked={selected === 8} onChange={handleSelect} />
                    <label htmlFor="radio8">8</label>
                </li>
                <li>
                    <input type='radio' id='radio9' name='rating' value='9' checked={selected === 9} onChange={handleSelect} />
                    <label htmlFor="radio9">9</label>
                </li>
                <li>
                    <input type='radio' id='radio10' name='rating' value='10' checked={selected === 10} onChange={handleSelect} />
                    <label htmlFor="radio10">10</label>
                </li>
            </ul>


        </div>
    )
}

export default RatingSelect