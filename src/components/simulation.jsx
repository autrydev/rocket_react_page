import React, { Component } from 'react';
import { motion } from "framer-motion";
import "../index.css";
import "../images/space_start.jpg";



const space_picture = new URL("../images/space_start.jpg", import.meta.url);
const rocket_picture = new URL("../images/rocket_start.png", import.meta.url);

class Simulation extends Component {
    state = {
        started: false,
        screen: "start", // "start", "form", "simulation", "restart"
        direction: "", // "left" or "right"
        finSize: 0, // integer values 1 - 10
        wind: 0 // integer values 1 - 10
    }
    
    constructor(props) {
        super(props);
        this.handleStart = this.handleStart.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleStart() {
        this.setState({ screen : "form"})
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.direction, this.state.finSize, this.state.wind);
        this.setState({ screen : "simulation"});
    }
    
    render() { 
        let started = this.state.started;
        let screen = this.state.screen;
       
        return (
            <div>
                <h1>SIMULATION APP</h1>
                {screen == "start" && 
                    <div className = "start-container">
                        <h3>CLICK THE BUTTON BELOW TO BEGIN</h3>
                        <motion.button className = "start_button" onClick = {this.handleStart} whileHover={{scale: 1.1}} variant = "primary">start</motion.button>
                    </div>
                   
                }
                {screen == "form" && 
                    <div className = "form-container">
                        <h2>
                            You are plannning a rocket to launch.
                            Enter your launch plans below! 
                        </h2>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Wind Direction
                                <div className = "direction-form">
                                    <select name="direction" value={this.state.direction} onChange={this.handleChange}>
                                        <option value="right">Right</option>
                                        <option value="left">Left</option>
                                    </select>
                                </div>
                            </label>
                            <label>
                                Wind Speed
                                <div className = "wind-form">
                                    <input name="wind" type="number" min="1" max="10" value={this.state.wind} onChange={this.handleChange} />
                                </div>
                            </label>
                            <label>
                                Fin Size
                                <div className = "finSize-form">
                                    <input name="finSize" type="number" min="1" max="10" value={this.state.finSize} onChange={this.handleChange} />
                                </div>
                            </label>
                            <motion.button className = "submit_button" type="submit" whileHover={{scale: 1.1}} variant = "primary">Done</motion.button>
                        </form>
                        <motion.div className = "motion-box" animate={{ x: 0, y: 0, scale: 1, rotate: 0, }} />
                    </div>
                }
                {screen == "simulation" && 
                    <div>
                        <h2>INSERT SIMULATION HERE</h2>
                    </div>
                }
            </div>
        );        
    }
}
 
export default Simulation;