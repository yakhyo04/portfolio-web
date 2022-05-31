import React from 'react';
import Typewriter from "typewriter-effect";

function Type(){
    return (
                <Typewriter
                    options={{
                        strings: [
                            "Frontend/React Developer",
                            "Backend/Node.js Developer",
                            "Mern Stack Developer",
                            "Student",
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                    }}
                />
    );
}

export default Type;
