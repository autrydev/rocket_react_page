import React, { useRef } from "react";
import { Box, Button } from '@mui/material';
import rocketwind from '../Assets/rocketwind.gif'
import Quiz from './Quiz';
import './styles.css';


function EduContent() {
    // Link from table of content to header section
    const windRef = useRef()
    const finsRef = useRef()
    const flyRef = useRef()
    const quizRef = useRef()
    const simRef = useRef()

    const windScroll = () => windRef.current.scrollIntoView();
    const finsScroll = () => finsRef.current.scrollIntoView();
    const flyScroll = () => flyRef.current.scrollIntoView();
    const quizScroll = () => quizRef.current.scrollIntoView();
    const simScroll = () => simRef.current.scrollIntoView();

    return(
      <Box 
        sx={{ 
            bgcolor: '#ffffff', 
            height: '100vh' }}
      >
        <>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <h1 className="header-font">Effects of Wind Gusts on Rockets</h1>
            </div>
            <br/> <br/>
            {/* Table of Content */}
            <Box
                sx={{ 
                    m: 1,
                    // p: 10,
                    width: 250,
                    height: 260,
                    marginLeft: 20, 
                    borderRadius: 7,
                    bgcolor: '#E6E6E6',
                    // display: 'flex',
                    float: 'left',
                }}
            >
                {/* Input T.O.C */}
                <h3 className = "table-content">Table of Content: </h3>
                <button 
                    className = "table-list"
                    variant = "text"
                    onClick = {windScroll}
                >
                    Wind
                </button>
                <br/>

                <button 
                    className="table-list"
                    variant = "text"
                    onClick = {finsScroll}
                >
                    Fins
                </button>
                <br/>

                <button 
                    className="table-list"
                    variant = "text"
                    onClick = {flyScroll}
                >
                    Flying with the Wind
                </button>
                <br/>

                <button 
                    className="table-list"
                    variant = "text"
                    onClick = {quizScroll}
                >
                    Test Your Knowledge!
                </button>
                <br/>

                <button 
                    className="table-list"
                    variant = "text"
                    onClick = {simScroll}
                >
                    Simulation
                </button>
                <br/>

                {/* <ul className="table-list">
                    <li>
                        <button 
                            className="table-list"
                            variant = "text"
                        >
                            Wind
                        </button>
                    </li>
                    <li>Fins</li>
                    <li>Flying with the Wind</li>
                    <li>Test Your Knowledge!</li>
                    <li>Simulation</li>
                </ul> */}
            </Box>
                
            {/* Rocket Graphic */}
            <img src = {rocketwind} className = ".gif"
                style = {{
                    width:500,
                    height:300,
                    marginLeft:70,
                    marginTop:-8,
                    borderRadius: 30,
                    borderWidth: 5,
                }} 
            />
            <br/> <br/>

            {/* Educational Content */}
            <div

                style={{
                    marginLeft: 150,
                    marginRight: 150
                }}
            >
                <h2 className="header-font" ref = {windRef}>Wind</h2>
                <p className = "content-font" >
                    When flying a rocket into the sky, you would think the rocket would immediately
                    go in the direction it’s pointing as soon as it launches - however, that’s not what happens. 
                    Due to wind, rockets get pushed and tilted from their original path. 
                    Because it’s important to know exactly where the rocket is going before launching it, 
                    people who design and build rockets need to understand how the wind affects the flight 
                    path of the rocket. 
                </p>
                <br/>

                <h2 className="header-font" ref = {finsRef}>Fins</h2>
                <p className="content-font">
                    Before we can understand how wind affects the rocket, we first need to understand what fins 
                    are and what they’re used for. Fins are attached to rockets to provide stability and control 
                    the direction the rocket flies in. Without fins, the rocket would wobble and turn in the air 
                    and the flight path of the rocket would be random. Because of fins, we can predict where the rocket 
                    will end up as it flies through the sky.
                </p>
                <br/>

                <h2 className="header-font" ref = {flyRef}>Flying with the Wind</h2>
                <p className="content-font">
                    When you put a piece of paper in front of a fan, the paper usually moves away from the fan. However, 
                    when a rocket experiences wind, the force of the wind is greater on the fins than the rest of the 
                    rocket. This pushes the fin farther away from the direction of the wind and this causes the rocket 
                    to rotate. This makes the rocket begin to point towards the wind. As the rocket continues to fly, the 
                    rocket will continue to rotate and fly directly into the wind.
                </p>
                <p className="content-font">
                    The stronger the winds, the faster the rocket will rotate into the wind. The larger the fins, the more
                     wind is forced on the rockets and the faster the rocket will rotate into the wind.
                </p>
                <br/>

                <h2 className="header-font" ref = {quizRef}>Test Your Knowledge!</h2>
                {/* Quiz */}
                <Quiz />
                <br/>

                <h2 className="header-font" ref = {simRef}>Simulation</h2>
                {/* Simulation App */}
                <br/>
            </div>
            
        </>
      </Box>
    );
}

export default EduContent;