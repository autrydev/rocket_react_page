import React, { useRef, useState } from "react";
import { Box, Button } from '@mui/material';
import rocketwind from '../Assets/rocketwind.gif';
import fin from '../Assets/FinsPic.png';
import overview from '../Assets/Overview.mp4';
import Quiz from './Quiz';
import Simulation from './simulation';
import './styles.css';
import { hover } from "@testing-library/user-event/dist/hover";


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

    // Hover over button
    const [hoverW, setHoverW] = useState(); // Wind
    const [hoverF, setHoverF] = useState(); // Fin
    const [hoverFW, setHoverFW] = useState(); // Flying with the Wind
    const [hoverT, setHoverT] = useState(); // Test Your Knowledge
    const [hoverS, setHoverS] = useState(); // Simulation

    const mouseOverW = () => { setHoverW(true); }
    const mouseOffW = () => { setHoverW(false); }

    const mouseOverF = () => { setHoverF(true); }
    const mouseOffF = () => { setHoverF(false); }

    const mouseOverFW = () => { setHoverFW(true); }
    const mouseOffFW = () => { setHoverFW(false); }

    const mouseOverT = () => { setHoverT(true); }
    const mouseOffT = () => { setHoverT(false); }

    const mouseOverS = () => { setHoverS(true); }
    const mouseOffS = () => { setHoverS(false); }

    return(
      <Box 
        sx={{ 
            bgcolor: '#ffffff', 
            height: '100vh' }}
      >
        <>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <h1 className="header-font"
                    style = {{fontSize: 50}}
                >
                    Effects of Wind Gusts on Rockets
                </h1>
            </div>
            <br/> <br/>
            {/* Table of Content */}
            <Box
                sx={{ 
                    m: 1,
                    // p: 10,
                    width: 300,
                    height: 400,
                    marginLeft: 10, 
                    borderRadius: 7,
                    bgcolor: '#E6E6E6',
                    marginTop:-1,
                    float: 'left',
                }}
            >
                {/* Input T.O.C */}
                <h3 className = "table-content">Table of Contents: </h3>
                <button 
                    className = {hoverW ? "on-button" :  "table-list" }
                    variant = "text"
                    onClick = {windScroll}
                    onMouseOut = {mouseOffW}
                    onMouseOver = {mouseOverW}
                >
                    Wind
                </button>
                <br/>

                <button 
                    className = {hoverF ? "on-button" :  "table-list" }
                    variant = "text"
                    onClick = {finsScroll}
                    
                    onMouseOut = {mouseOffF}
                    onMouseOver = {mouseOverF}
                >
                    Fins
                </button>
                <br/>

                <button 
                    className = {hoverFW ? "on-button" :  "table-list" }
                    variant = "text"
                    onClick = {flyScroll}

                    onMouseOut = {mouseOffFW}
                    onMouseOver = {mouseOverFW}
                >
                    Flying with the Wind
                </button>
                <br/>

                <button 
                    className = {hoverT ? "on-button" :  "table-list" }
                    variant = "text"
                    onClick = {quizScroll}

                    onMouseOut = {mouseOffT}
                    onMouseOver = {mouseOverT}

                >
                    Test Your Knowledge!
                </button>
                <br/>

                <button 
                    className = {hoverS ? "on-button" :  "table-list" }
                    variant = "text"
                    onClick = {simScroll}

                    onMouseOut = {mouseOffS}
                    onMouseOver = {mouseOverS}
                >
                    Simulation
                </button>
                <br/>
            </Box>
                
            {/* Rocket Graphic */}
            <img src = {rocketwind} className = ".gif"
                style = {{
                    width:600,
                    height:400,
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
                <h2 
                    className="header-font" 
                    ref = {windRef}
                    style = {{fontSize: 30}}
                >
                    Wind
                </h2>
                <p className = "content-font" >
                    When flying a rocket into the sky, you would think the rocket would immediately
                    go in the direction it’s pointing as soon as it launches - however, that’s not what happens. 
                    Due to wind, rockets get pushed and tilted from their original path. 
                    Because it’s important to know exactly where the rocket is going before launching it, 
                    people who design and build rockets need to understand how the wind affects the flight 
                    path of the rocket. 
                </p>
                <br/>

                <h2 
                    className="header-font" 
                    ref = {finsRef}
                    style = {{fontSize: 30}}
                >
                    Fins
                </h2>
                <p className="content-font">
                    Before we can understand how wind affects the rocket, we first need to understand what fins 
                    are and what they’re used for. Fins are attached to rockets to provide stability and control 
                    the direction the rocket flies in. Without fins, the rocket would wobble and turn in the air 
                    and the flight path of the rocket would be random. Because of fins, we can predict where the rocket 
                    will end up as it flies through the sky.
                </p>
                <br/>
                
                <img src = {fin} className = ".gif"
                    style = {{
                        width:900,
                        height:700,
                        marginTop:-8,
                        marginLeft: -20
                    }} 
                />

                <br/>

                <h2 
                    className="header-font" 
                    ref = {flyRef}
                    style = {{fontSize: 30}}
                >
                    Flying with the Wind
                </h2>
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
                <h4 className="font-link" style = {{fontSize: 20}}>Content Overview</h4>
                <video 
                    controls 
                    style = {{
                        marginLeft: -40
                    }}
                >
                    <source src={overview} type="video/mp4"/>
                </video>
                <br/>
                <br/>
            </div>
            
            <div
                style={{
                    marginLeft: 150,
                    marginRight: 150
                }}
            >
                <h2 
                    className="header-font" 
                    ref = {quizRef}
                    style = {{fontSize: 30}}
                >
                    Test Your Knowledge!
                </h2>
            </div>
            
            <div
                style={{
                    marginLeft: 75
                }}
            >
                {/* Quiz */}
                <Quiz/>
                <br/>
            </div>
            
            <div
                style={{
                    marginLeft: 150,
                    marginRight: 150
                }}
            >
                <h2 
                    className="header-font" 
                    ref = {simRef}
                    style = {{fontSize: 30}}
                >
                    Simulation
                </h2>
                <br/>
            </div>
            
            <div
                style={{
                    marginLeft: 75,
                    marginTop: -15
                }}
                className = "sim-app"
            >
                {/* Simulation App */}
                <Simulation/>
                <br/>
            </div>
        </>
      </Box>
    );
}

export default EduContent;