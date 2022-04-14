import React from "react";
import { useSpring, animated } from 'react-spring'
import './styles.css';


function Animation(props) {

    const path = "path" + (parseInt(props.finSize)+parseInt(props.wind)) + ((props.direction === "left") ? "l" : "r");
    const fileUrl = require('../Assets/Rocket_Fin' + props.finSize + '.png');

    const { offsetDistance, scale } = useSpring({
        from: { offsetDistance: "0%", scale: 1},
        to: { offsetDistance: "100%", scale: 1},
        config: {
            duration: 4000
        }
      });

    return (
        <div>
            <animated.div
                className={path}
                style={{
                offsetDistance,
                scale
                }}
            >
                <animated.img src={fileUrl} alt='rocket' className='rocket'/>
            </animated.div>
        </div>
    );
}

export default Animation;