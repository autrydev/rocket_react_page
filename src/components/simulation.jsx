import React, { Component } from 'react';

class Simulation extends Component {
    state = {
        started: false,
        screen: "start", // "start", "form", "simulation", "restart"
        direction: "", // "left" or "right"
        finSize: 0, // integer values 1 - 10
        wind: 0 // integer values 1 - 10
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
                <h1>SIMULATION APP</h1>
                {screen == "start" && 
                    <div>
                        <h2>START SCREEN</h2>
                        <h3>CLICK THE BUTTON BELOW TO BEGIN</h3>
                        <button onClick={this.handleStart}>START</button>
                    </div>
                }
                {screen == "form" && 
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Wind Direction
                                <select name="direction" value={this.state.direction} onChange={this.handleChange}>
                                    <option value="right">Right</option>
                                    <option value="left">Left</option>
                                </select>
                            </label>
                            <label>
                                Wind Speed
                                <input name="wind" type="number" min="1" max="10" value={this.state.wind} onChange={this.handleChange} />
                            </label>
                            <label>
                                Fin Size
                                <input name="finSize" type="number" min="1" max="10" value={this.state.finSize} onChange={this.handleChange} />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
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