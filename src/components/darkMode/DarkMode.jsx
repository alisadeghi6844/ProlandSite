import React, {useEffect, useState} from 'react';

const DarkMode = () => {
    const [mode, setMode] = useState(() => localStorage.getItem("mode"));
    const handleModeClick = () => {
        setMode(mode => mode ==="dark"?"light":"dark");
    }
    useEffect(() => {
        if (mode==="dark"){
            document.body.classList.add("dark-mode");
            localStorage.setItem("mode","dark");
        }else{
            document.body.classList.remove("dark-mode");
            localStorage.setItem("mode","light");
        }
    },[mode]);
    return (
        <div>
            <a className="cursor-pointer" onClick={handleModeClick}>
                {mode === "dark" ? "Light" : "Dark"} Mode
            </a>
        </div>
    );
};

export default DarkMode;
