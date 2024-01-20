import TextField from '@mui/material/TextField';
import React, { useEffect } from 'react';
import { tss } from "tss-react";
import MUIDatePicker from './DatePicker';
import { IFormData } from './types/IFormData';

export interface ISkillsData {
  skills: string;
  skillLevel: string;
}
interface ISkillsProps {
  data: ISkillsData;
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

const Skills: React.FC<ISkillsProps> = ({
  data,
  onChange,
}) => {
  const { classes } = useStyles();

  useEffect(() => {
    // Add validation or other logic if needed
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    onChange({ skills: { ...data, [name]: value } } as IFormData);
  };

  return (
    <>
      <form className={classes.root}>
        <TextField label="Skills" variant="standard" onChange={handleChange} value={data.skills} name='skills' sx={{
          margin: 1
        }} />
        <MUIDatePicker label="Skill Level" variant="standard" name='startDate' onChange={handleChange} value={data.skillLevel} sx={{
          margin: 1
        }} />
      </form>
    </>
  );
};

export default Skills;

