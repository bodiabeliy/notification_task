import React, {useState} from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

function StepDescription() {
  return ['Начинающий/Элементарный', 'Ниже среднего', 'Среднего', 'Выше среднего', 'Продвинутый/свободный'];
}


export default function VerticalStepper() {
  const [activeStep, setActiveStep] = useState(0,new Set());
  const steps = StepDescription();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <div >
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label) => (
          <Step key={label} onClick={handleNext}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
   </div>
  );
}