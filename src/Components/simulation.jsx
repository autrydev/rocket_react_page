import React, { Component } from 'react';
import { AnimateSharedLayout, motion } from "framer-motion";
import './styles.css';
import SimBG from "../Assets/SimBackground.png";
import Animation from "./animation";


class Simulation extends Component {
    state = {
        started: false,
        screen: "start", // "start", "form", "simulation", "restart"
        direction: "right", // "left" or "right"
        finSize: 1, // integer values 1 - 10
        wind: 1 // integer values 1 - 10
    }
    
    constructor() {
        super();
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
                <br/>
                <br/>
                {screen === "start" && 
                    <div className = "start-container">
                        <motion.button className = "str_button" 
                            onClick = {this.handleStart} 
                            whileHover={{scale: 1.2}} 
                            variant = "primary"
                        >
                                START
                        </motion.button>
                        <h3 className = "start-text">CLICK THE BUTTON ABOVE TO BEGIN</h3>
                    </div>
                }
                {screen === "form" && 
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
                            <motion.button className = "submit_button" type="submit" whileHover={{scale: 1.1}} variant = "primary">LAUNCH</motion.button>
                        </form>
                        <motion.div className = "motion-box" animate={{ x: 0, y: 0, scale: 1, rotate: 0, }} />
                    </div>
                }
                {screen === "simulation" && 
                    <div className= {(this.state.direction === "left") ? "sim-container-left" : "sim-container-right"} >
                        <Animation finSize={this.state.finSize} wind={this.state.wind} direction={this.state.direction}/>
                        <motion.button className = "return_button" 
                            onClick = {this.handleStart} 
                            whileHover={{scale: 1.2}} 
                            variant = "primary"
                        >
                                Launch Plans
                        </motion.button>
                        <div className="mph_label">{this.state.wind} MPH {(this.state.direction === "left") ? '\u2190' : '\u2192'}</div>
                    </div>
                }
            </div>
        );        
    }
}
 
export default Simulation;