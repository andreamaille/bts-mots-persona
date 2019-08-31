import React, { Component, Fragment} from 'react';
// import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Persona from './Persona.js';


class Header extends Component {
    constructor() {
        super();

        this.state = {
            isHeader: true,
            isPersona: false,
            isBoyWithLuv: false
        }
    }

    hideContent = () => {
        this.setState ({
            isHeader:false,
            isPersona: true
        })
    }

    render() {
        return (
            <Fragment>
                <Persona />
                {/* {this.state.isHeader ? 
                    <header className='hero'>
                        <div className="wrapper">
                            <div className="hero-main">
                                <div className="title">
                                    <h1>BTS: MAP OF THE SOUL</h1>
                                    <p className="subtitle">Persona</p>
                                    <p>A creative coding by Andrea Maille</p>
                                    <nav>
                                        <ul>

                                            <button onClick={this.hideContent}>Start</button>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="album">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                                        <path
                                            id="heart-left" className="heart"
                                            d="M194,242c19.684-27.059,22.15-62.24,7-90-19.1-34.991-60.5-48.274-94-40-33.481,8.27-51.039,35.631-58,51-9.331,20.6-13.207,55.142,9,104,11.9,26.183,33.857,51.059,40,57,34.329,33.2,69.359,64.446,102,92a615,615,0,0,1,81,83" />
                                        <path
                                            id="heart-middle" className="heart"
                                            d="M108,243a498.216,498.216,0,0,0,46,55c19.151,19.812,39.14,35.276,61,54,27.959,23.949,51.632,49.724,77,72,4.257,3.738,16.809,16.03,25,28a149.936,149.936,0,0,1,21,46" />
                                        <path
                                            id="heart-right" className="heart"
                                            d="M177,181A124.719,124.719,0,0,1,328,63a123.455,123.455,0,0,1,81,176" />
                                        <path
                                            id="heart-bottom" className="heart"
                                            d="M443,157a181.172,181.172,0,0,1-3,81c-5.292,19.574-15.984,43.359-36,69-17.269,22.121-35.479,37.084-60,54a840.664,840.664,0,0,1-75,46,510.967,510.967,0,0,0-136,90" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </header> : null} 
    
                {this.state.isPersona ?
                    <Persona />
                : null} */}
            </Fragment>

        )
    }
}

export default Header;
