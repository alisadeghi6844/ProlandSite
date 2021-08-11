import React from 'react';
import TopTeach from "./TopTeach";
import { ParallaxProvider } from 'react-scroll-parallax';

const App = () => {
    return (
        <div>
            <ParallaxProvider>
            <TopTeach/>
            </ParallaxProvider>
        </div>
    );
};

export default App;
