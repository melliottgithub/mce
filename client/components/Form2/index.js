import React, { useState } from 'react';

const Form2 = ({setCurrentStep}) => {
    const [line1, setLine1] = useState("");
    const [line2, setLine2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [phone, setPhone] = useState("");

    const handleOnChange = stateUpdater => (e) => {
        const value = e.target.value;
        stateUpdater(value);
    }

    const handleOnClick = (e) => {
        e.preventDefault();
        setCurrentStep(2)
        console.log("clicked")
    }

    return (
        <form>
            <input type="text" placeholder="line1" value={line1} onChange={handleOnChange(setLine1)} />
            <input type="text" placeholder="line2" value={line2} onChange={handleOnChange(setLine2)} />
            <input type="text" placeholder="city" value={city} onChange={handleOnChange(setCity)} />
            <input type="text" placeholder="state" value={state} onChange={handleOnChange(setState)} />
            <input type="text" placeholder="zipCode" value={zipCode} onChange={handleOnChange(setZipCode)} />
            <input type="tel" placeholder="phone" value={phone} onChange={handleOnChange(setPhone)} />
            <button onClick={handleOnClick}>Next</button>
        </form>
    )
}

export default Form2;