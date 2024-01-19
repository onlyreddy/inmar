// src/ThemeProviderWrapper.js
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react';
import { tss } from 'tss-react/mui';
import { darkTheme, lightTheme } from './themes';
import IconButton from '@mui/material/IconButton';

interface IThemeProviderWrapperProps {
    children: React.ReactNode;
}

const useStyles = tss
    .create(({ theme }) => ({
        root: {
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Roboto, sans-serif',
            position: 'relative'
        },
        iconButton: {
            position: 'fixed',
            top: theme.spacing(2),
            right: theme.spacing(2)
        }
    }));

const ThemeProviderWrapper = ({ children }: IThemeProviderWrapperProps) => {
    const { classes } = useStyles();

    const [selectedTheme, setSelectedTheme] = useState(lightTheme);

    const toggleTheme = () => {
        setSelectedTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
    };

    const themeIcon = React.useMemo(() =>
        selectedTheme === lightTheme ? <LightModeIcon /> : <DarkModeIcon />
        , [selectedTheme]);

    return (
        <div className={classes.root}>
            <ThemeProvider theme={selectedTheme}>
                {children}

                <IconButton onClick={toggleTheme} className={classes.iconButton}>
                    {themeIcon}
                </IconButton>
            </ThemeProvider>
        </div>
    );
};

export default ThemeProviderWrapper;
