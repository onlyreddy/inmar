import Button from '@mui/material/Button';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import EducationInformation from './EducationInformation';
import PersonalInformation from './PersonalInformation';
import Skills from './Skills';
import WorkExperience from './WorkExperience';
import { IFormData } from './types/IFormData';
import { tss } from "tss-react/mui";

const steps = ['Personal Information', 'Work Experience', 'Education', 'Skills'];

const useStyles = tss
    .create(({ theme }) => ({
        root: {
            display: 'flex',
            flexDirection: 'column',
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
        },
    }));

const MultiStepForm: React.FC = () => {
    const { classes } = useStyles();
    const [currentStep, setCurrentStep] = useState<number>(2);
    const [formData, setFormData] = useState<IFormData>({
        personalInformation: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            languageKnown: '',
        },
        workExperience: {
            companyName: '',
            startDate: dayjs(new Date()) as unknown as string,
            endDate: '',
            role: ''
        },
        education: {
            institutionName: '',
            typeOfInstitution: '',
            degree: '',
            date: ''
        },
        skills: {
            skills: '',
            skillLevel: ''
        },
    });

    useEffect(() => {
        // Handle logic for fetching and updating data if needed
    }, [currentStep]);

    const handleNext = React.useCallback(() => {
        setCurrentStep((prevStep) => prevStep + 1);
    }, []);

    const handlePrevious = React.useCallback(() => {
        setCurrentStep((prevStep) => prevStep - 1);
    }, []);

    const handleFormDataChange = React.useCallback((stepData: IFormData) => {
        setFormData((prevData) => ({
            ...prevData,
            ...stepData,
        }));
    }, []);

    const renderStep = React.useMemo(() => {
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
                    <EducationInformation data={formData.education} onChange={handleFormDataChange} />
                );
            case 3:
                return <Skills data={formData.skills} onChange={handleFormDataChange} />;
            default:
                return null;
        }
    }, [currentStep, formData.education, formData.personalInformation, formData.skills, formData.workExperience, handleFormDataChange]);

    return (
        <div className={classes.root}>
            <h1>Job Application Form</h1>
            <div>
                <div>
                    {steps.map((step, index) => (
                        <span key={index} className={index === currentStep ? 'active' : ''}>
                            {step}
                        </span>
                    ))}
                </div>
                {renderStep}
                <div>
                    {currentStep > 0 && (
                        <Button onClick={handlePrevious} variant="contained">Previous</Button>
                    )}
                    {currentStep < steps.length - 1 && (
                        <Button onClick={handleNext} variant="contained">Next</Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MultiStepForm;
