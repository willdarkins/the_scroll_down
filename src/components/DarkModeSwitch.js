import React from 'react'
import styled from 'styled-components'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import { useEffect } from 'react';

function DarkModeSwitch() {
    //useState and useEffect for Dark Mode
    const [darkMode, setDarkMode] = useState(false);
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        const json = localStorage.getItem("site-dark-mode");
        const currentMode = JSON.parse(json);
        if (currentMode) {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-theme");
            setChecked(true)
        } else {
            document.body.classList.remove("dark-theme");
            setChecked(false)
        }
        const json = JSON.stringify(darkMode);
        localStorage.setItem("site-dark-mode", json);
    }, [darkMode]);
    return (
        <DarkStyles>
            <div className='light-dark-mode'>
                <div className='left-content'>
                    <DarkModeIcon />
                </div>
                <div className='right-content'>
                    <Switch
                        size='small'
                        value=''
                        checked={checked}
                        inputProps={{ 'aria-label': 'controlled' }}
                        onClick={() => setDarkMode(!darkMode)}
                    />
                </div>
            </div>
        </DarkStyles>
    )
}

const DarkStyles = styled.div`
.light-dark-mode{
        margin-left: 1rem;
        margin-top: .3rem;
        background: #004b69;
        border-radius: 25%;
        width: 4.5rem;
        height: 1.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        svg{
            display: flex;
            align-items: center;
            font-size: 1.3rem;
            color: white;
        }
    }
`

export default DarkModeSwitch
