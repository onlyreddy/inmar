import TextField from '@mui/material/TextField';
import React, { useEffect } from 'react';
import { tss } from "tss-react";
import MUIDatePicker from './DatePicker';
import { IFormData } from './types/IFormData';

export interface IWorkExperienceData {
  companyName: string;
  startDate: string;
  endDate: string;
  role: string;
}
export interface IWorkExperienceProps {
  data: IWorkExperienceData;
  onChange: (stepData: IFormData) => void;
}

const useStyles = tss
  .create(() => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: 'fit-content',
      height: '100%'
    },

  }));

const WorkExperience: React.FC<IWorkExperienceProps> = ({
  data,
  onChange,
}) => {
  const { classes } = useStyles();

  useEffect(() => {
    // Add validation or other logic if needed
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ workExperience: { ...data, [name]: value } } as IFormData);
  };

  return (
    <>
      <form className={classes.root}>
        <TextField label="Company Name" variant="standard" onChange={handleChange} value={data.companyName} name='companyName' sx={{
          margin: 1
        }} />
        <MUIDatePicker label="Start Date" variant="standard" name='startDate' onChange={handleChange} value={data.startDate} sx={{
          margin: 1
        }} />
        <MUIDatePicker label="End Date" variant="standard" name='endDate' onChange={handleChange} value={data.endDate} sx={{
          margin: 1
        }} />
        <TextField label="Roles" variant="standard" name='phoneNumber' onChange={handleChange} type='tel' value={data.role} sx={{
          margin: 1
        }} />
      </form>
    </>
  );
};

export default WorkExperience;

