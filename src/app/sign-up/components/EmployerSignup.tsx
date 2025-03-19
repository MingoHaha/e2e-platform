"use client";
import { useState } from "react";
import StepProgress from "./StepProgress";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1); 
    }
  };

  const handleBackStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white ">

    <div className="font-bold text-3xl text-center mb-12">Sign up to hire talent</div>

      {/* Step Progress Bar */}
      <StepProgress currentStep={currentStep} />

      {/* Form Content */}
      {currentStep === 1 && <Step1 />}
      {currentStep === 2 && <Step2 />}
      {currentStep === 3 && <Step3 />}


      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        {currentStep > 1 && (
          <button
            onClick={handleBackStep}
            className="px-12 py-2 flex items-center justify-center rounded-full border border-button hover:bg-button/5 transition gap-2 text-button"
          >
            <ChevronLeft className=""size={20}/>
            Back
            
          </button>
        )}
        {currentStep < 3 ? (
          <button
            onClick={handleNextStep}
            className="px-12 py-2 flex items-center justify-center gap-2 bg-button text-white rounded-full border hover:bg-buttonHover transition"
          
          >
            <p>Next</p>
            <ChevronRight className=""size={20}/>
          </button>
        ) : (
          <button className="px-12   py-2 bg-button text-white text-bold rounded-full">
            
            Sign Up
          </button>
        )}
      </div>
    </div>
  );
}
