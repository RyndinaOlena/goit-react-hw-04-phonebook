import { useState } from "react";

export const Form = ({ setAddContacts }) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')


    const handeChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                setName(value)
                break;
            case 'number':
                setNumber(value)
                break;
            default:

        }
    }

    const handeSubmit = (event) => {
        event.preventDefault()
        if (number && name) {
            setAddContacts({ name, number })
            setName('')
            setNumber('')
        }
    }



    return (
        <form onSubmit={handeSubmit} >
            <label>
                <span>Name</span>
                <input onChange={handeChange} type="text" name="name" value={name} required />
            </label>
            <label>
                <span>Number</span>
                <input onChange={handeChange} type="tel" name="number" value={number} required />
            </label>
            <button onClick={handeSubmit} type="submit">Add contact</button>
        </form >

    )
}


