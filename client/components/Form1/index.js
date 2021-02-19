import React, { useState } from 'react';
import axios from 'axios';
import {API_URL} from '../../constants';

const Form = ({setCurrentStep , setCurrentId}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
    }

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
    }

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
    }

    const handleOnClick = (e) => {
        e.preventDefault();

        const body = {
            name,
            email,
            password
        }

        axios.post(API_URL , body)
            .then( response => {
                console.log(response);
                setCurrentId(response.data.data.data._id)
                setCurrentStep(1)

            })
            .catch(err => console.error(err));

        }

    return (
        <form>
            <input type="text" placeholder="name" value={name} onChange={handleNameChange} />
            <input type="email" placeholder="email" onChange={handleEmailChange} value={email} />
            <input type="password" placeholder="password" value={password} onChange={handlePasswordChange} />
            <button onClick={handleOnClick}>Next</button>
        </form>
    )
}

export default Form;