import TextField from '@mui/material/TextField';
import React, { useEffect } from 'react';
import { tss } from "tss-react/mui";
import { IFormData } from './types/IFormData';

export interface IPersonalInformationData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    languageKnown: string;
}

interface PersonalInformationProps {
    data: IPersonalInformationData;
    onChange: (stepData: IFormData) => void;
}

const useStyles = tss
    .create(({ theme }) => ({
        root: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        },

    }));

const PersonalInformation: React.FC<PersonalInformationProps> = ({
    data,
    onChange,
}) => {
    const { classes } = useStyles();

    useEffect(() => {
        // Add validation or other logic if needed
    }, [data]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        onChange({ personalInformation: { ...data, [name]: value } } as IFormData);
    };

    return (
        <div>
            <h2>Personal Information</h2>
            <form className={classes.root}>
                <TextField label="First Name" variant="standard" onChange={handleChange} value={data.firstName} name='firstName' sx={{
                    margin: 1
                }} />
                <TextField label="Last Name" variant="standard" name='lastName' onChange={handleChange} value={data.lastName} sx={{
                    margin: 1
                }} />
                <TextField label="Email" variant="standard" name='email' onChange={handleChange} type='email' value={data.email} sx={{
                    margin: 1
                }} />
                <TextField label="Phone number" variant="standard" name='phoneNumber' onChange={handleChange} type='tel' value={data.phoneNumber} sx={{
                    margin: 1
                }} />
                <TextField label="Languages" variant="standard" name='languageKnown' onChange={handleChange} value={data.languageKnown} sx={{
                    margin: 1
                }} />
            </form>
        </div>
    );
};

export default PersonalInformation;
