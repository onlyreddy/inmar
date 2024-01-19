import React, { useState, useEffect } from 'react';
import PersonalInformation from './PersonalInformation';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Skills from './Skills';

const steps = ['Personal Information', 'Work Experience', 'Education', 'Skills'];

const MultiStepForm: React.FC = () => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [formData, setFormData] = useState({
        personalInformation: {
            name: '',
            email: '',
            phoneNumber: '',
            languageKnown: '',
        },
        workExperience: [],
        education: [],
        skills: [],
    });

    useEffect(() => {
        // Handle logic for fetching and updating data if needed
    }, [currentStep]);

    const handleNext = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handlePrevious = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const handleFormDataChange = (stepData: any) => {
        setFormData((prevData) => ({
            ...prevData,
            ...stepData,
        }));
    };

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return (
                    <PersonalInformation
                        data={formData.personalInformation}
                        onChange={handleFormDataChange}
                    />
                );
            case 1:
                return (
                    <WorkExperience
                        data={formData.workExperience}
                        onChange={handleFormDataChange}
                    />
                );
            case 2:
                return (
                    <Education data={formData.education} onChange={handleFormDataChange} />
                );
            case 3:
                return <Skills data={formData.skills} onChange={handleFormDataChange} />;
            default:
                return null;
        }
    };

    return (
        <div>
            <h1>Job Application Form</h1>
            <div>
                <div>
                    {steps.map((step, index) => (
                        <span key={index} className={index === currentStep ? 'active' : ''}>
                            {step}
                        </span>
                    ))}
                </div>
                {renderStep()}
                <div>
                    {currentStep > 0 && (
                        <button onClick={handlePrevious}>Previous</button>
                    )}
                    {currentStep < steps.length - 1 && (
                        <button onClick={handleNext}>Next</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MultiStepForm;
