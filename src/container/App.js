import React from 'react';
import Proland from "./Proland";
import { ParallaxProvider } from 'react-scroll-parallax';

const App = () => {
    return (
        <div>
            <ParallaxProvider>
            <Proland/>
            </ParallaxProvider>
        </div>
    );
};

export default App;
