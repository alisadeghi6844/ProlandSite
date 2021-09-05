import React, {useEffect, useState} from 'react';
import "./style.css";

const DarkMode = () => {
    const [mode, setMode] = useState(() => localStorage.getItem("mode"));
    const handleModeClick = () => {
        setMode(mode => mode === "dark" ? "light" : "dark");
    }
    useEffect(() => {
        if (mode === "dark") {
            document.body.classList.add("dark-mode");
            localStorage.setItem("mode", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("mode", "light");
        }
    }, [mode]);
    return (
        <div className="darkModeButton">
            <input type="checkbox" id="switch"/>
            <label onClick={handleModeClick} className="toggle" htmlFor="switch">
                <div className="a">&#127774;</div>
                <div className="b">&#127762;</div>
            </label>
        </div>
    );
};

export default DarkMode;
