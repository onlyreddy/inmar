import TextField from '@mui/material/TextField';
import React, { useEffect } from 'react';
import { tss } from "tss-react";
import { IFormData } from './types/IFormData';
import { PhoneInput } from './PhoneInput';

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
            flexDirection: 'column',
            width: 'fit-content',
            height: '100%'
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
        <>
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
                <PhoneInput  name='phoneNumber' onChange={()=>{}} value={data.phoneNumber} sx={{
                    margin: 1
                }} />
                <TextField label="Languages" variant="standard" name='languageKnown' onChange={handleChange} value={data.languageKnown} sx={{
                    margin: 1
                }} />
            </form>
        </>
    );
};

export default PersonalInformation;
