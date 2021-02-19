import React, { Fragment } from 'react';

const Purchase = ({ setCurrentStep }) => {
  const handleOnClick = (e) => {
    e.preventDefault();
    setCurrentStep(0)
    console.log('click');

  }

  return (
    <Fragment>
      <h1>Purchase ready to Confirm!</h1>
      <button onClick={handleOnClick} >Purchase</button>
    </Fragment>
  )
}

export default Purchase;