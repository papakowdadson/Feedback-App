import React, { createContext, useEffect, useState } from 'react'
// import { v4 as uuidv4 } from 'uuid';

export const Feedbackcontext = createContext();
function Feedbackprovider({ children }) {

    const [feedback, setFeedback] = useState([])
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {

        fetchFeedback();
    }, [])

    const fetchFeedback = async () => {
        const response = await fetch(`http://localhost:5000/feedback`)
        const data = await response.json()
        console.log(data);
        setFeedback(data);
        setisLoading(false)

    }



    const deleteFeedback = async (id) => {
        if (window.confirm('are you sure of deleting?')) {
            await fetch(`http://localhost:5000/feedback/${id}`, {
                method: 'DELETE',
            })
            setFeedback(feedback.filter((item) => item.id !== id))

        }
    }
    const addFeedback = async(newFeedback) => {
        // await fetch(`http://local:host:5000/feedback`, {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json', },
        //     body: JSON.stringify(newFeedback),
        // })
        //     .then((response) => { response.json() })
        //     .then((data) => { setFeedback([data, ...feedback]) })
        //     .catch(() => console.log('json feedback was not updated'))
        const response = await fetch(`http://localhost:5000/feedback`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body:JSON.stringify(newFeedback),
        })
        const data = await response.json()
        console.log(data)
        if (data !== null) {
            // newFeedback.id = uuidv4();
            setFeedback([data, ...feedback])
        }
    }


    return (
        <Feedbackcontext.Provider value={{ feedback, deleteFeedback, addFeedback, isLoading }}>
            <div>{children}</div>
        </Feedbackcontext.Provider>
    )
}

export default Feedbackprovider