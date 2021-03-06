import React, { useState } from 'react';
import axios from 'axios';
import {API_URL} from '../../constants';

const Form3 = ({setCurrentStep , currentId}) => {
    const [creditCard, setCreditCard] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCVV] = useState(0);
    const [zipCode, setZipCode] = useState("");

    const handleCreditCardChange = (e) => {
        const value = e.target.value;
        setCreditCard(value);
    }

    const handleExpiryDateChange = (e) => {
        const value = e.target.value;
        setExpiryDate(value);
    }

    const handleCVVChange = (e) => {
        const value = e.target.value;
        setCVV(value);
    }

    const handleZipCodeChange = (e) => {
        const value = e.target.value;
        setZipCode(value);
    }

    const handleOnClick = async (e) => {
        e.preventDefault();
        try{
            const body = {
                creditCard,
                expiryDate,
                cvv,
                billingZipCode : zipCode
            }
            await axios.patch(`${API_URL}/${currentId}`,body )
            setCurrentStep(3)
        } catch(err){

        }

    }

    return (
        <form>
            <input type="text" placeholder="credit card" value={creditCard} onChange={handleCreditCardChange} />
            <input type="text" placeholder="expiry date" value={expiryDate} onChange={handleExpiryDateChange} />
            <input type="number" placeholder="cvv" onChange={handleCVVChange} value={cvv} />
            <input type="text" placeholder="zip code" value={zipCode} onChange={handleZipCodeChange} />
            <button onClick={handleOnClick}>Next</button>
        </form>
    )
}

export default Form3;