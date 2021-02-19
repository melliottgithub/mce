import React, { Fragment , useState } from 'react';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';
import Purchase from './components/Purchase';

const Steps = [
  Form1,
  Form2,
  Form3,
  Purchase
];

const App = () => {
  const [currentStep,setCurrentStep] = useState(0);
  const Form = Steps[currentStep];

  return (
  <Fragment>
      <Form setCurrentStep={setCurrentStep} />
  </Fragment>

    )
}

export default App;
