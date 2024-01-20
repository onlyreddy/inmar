import TextField from '@mui/material/TextField';
import React, { useEffect } from 'react';
import { tss } from "tss-react";
import MUIDatePicker from './DatePicker';
import { IFormData } from './types/IFormData';

export interface IEducationInformationData {
  institutionName: string;
  typeOfInstitution: string;
  degree: string;
  date: string;
}

export interface IEducationInformationProps {
  data: IEducationInformationData;
  onChange: (stepData: IFormData) => void;
}

const useStyles = tss
  .create(() => ({
    root: {
      display: 'flex',
      width: 'fit-content',
      flexDirection: 'column',
      height: '100%'
    },
  }));

const EducationInformation: React.FC<IEducationInformationProps> = ({
  data,
  onChange,
}) => {
  const { classes } = useStyles();

  useEffect(() => {
    // Add validation or other logic if needed
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    onChange({ education: { ...data, [name]: value } } as IFormData);
  };

  return (
    <>
      <form className={classes.root}>
        <TextField label="Institution Name" variant="standard" name='institutionName' onChange={handleChange} value={data.institutionName} sx={{
          margin: 1
        }} />
        <TextField label="Type Of Institution" variant="standard" name='typeOfInstitution' onChange={handleChange} type='email' value={data.typeOfInstitution} sx={{
          margin: 1
        }} />
        <TextField label="Degree Type" variant="standard" name='degree' onChange={handleChange} value={data.degree} sx={{
          margin: 1
        }} />
        <MUIDatePicker label="Date of Completion" variant="standard" name='date' onChange={handleChange} value={data.date} sx={{
          margin: 1
        }} />
      </form>
    </>
  );
};

export default EducationInformation;
