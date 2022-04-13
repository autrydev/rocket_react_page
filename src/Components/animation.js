import React from "react";
import { useSpring, animated } from 'react-spring'
import './styles.css';


function Animation(props) {

    const distance = ((parseInt(props.finSize)+parseInt(props.wind))*5)+"%";
    console.log("Distance: " + distance);

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
                className="path"
                style={{
                offsetDistance,
                scale
                }}
            >
                <animated.img src={require('../Assets/Rocket_Fin5.png')} alt='rocket' className='rocket'/>
            </animated.div>
        </div>
    );
}

export default Animation;