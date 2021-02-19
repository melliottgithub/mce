import React, { useState } from 'react';
import axios from 'axios';
import {API_URL} from '../../constants';

const Form2 = ({setCurrentStep , currentId}) => {
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
        const address = {
            line1,
            line2,
            city,
            state,
            zipCode,
        }

        axios.patch(`${API_URL}/${currentId}`, { address , phone })
            .then( response => {
                setCurrentStep(2)
            })
            .catch(err => console.error(err));
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