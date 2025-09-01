import React from 'react';
import BlurText from './BlurText/BlurText';

function Onload() {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };
    return (
        <div className='w-screen h-screen flex justify-center item-center text-white bg-black'>
            <BlurText
                text="Krishna Aggarwal!"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-8xl font-bold mb-8"
            />
        </div>
    );
}

export default Onload;