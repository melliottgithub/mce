import React, { useState } from 'react';

const Form = ({setCurrentStep}) => {
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
        setCurrentStep(1)
        console.log("clicked")
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