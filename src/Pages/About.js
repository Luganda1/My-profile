
// import { Container } from "@material-ui/core";
// import {React, useState, useEffect } from "react";

// export default function Bio() {

//function to capture mouse position
//     const useMousePosition = () => {
//     const [mousePosition, setMousePosition] = useState({ x: null, y: null });

//     const updateMousePosition = ev => {
//         setMousePosition({ x: ev.clientX, y: ev.clientY });
//     };

//     useEffect(() => {
//         window.addEventListener("mousemove", updateMousePosition);

//         return () => window.removeEventListener("mousemove", updateMousePosition);
//     }, []);

//     return mousePosition;
//     };


//     return (
//         <div className="bio">
//         <div className="titleContainer" onMouseMove={_onMouseMove} refs="titleContainer">
//             <div className="titleWrapper">
//                 <h1>WELCOME! I'M <span>TONNY LUGANDA</span> </h1>
//             </div>
//             <div className="cloneWrapper">
//                 <h1>WELCOME! I'M <span>TONNY LUGANDA</span> </h1>
//             </div>
//         </div>
//         </div>
//     )
// }



import React from 'react';
// import TextAnimator from "../components/TextAnimator"
import 'materialize-css';
import Button from "../components/Button"
import {Link} from 'react-router-dom'

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        }
    }

    _onMouseMove = (e) => {
        const width = this.refs.titleContainer.clientWidth;
        const height = this.refs.titleContainer.clientHeight;
        const oX = (e.nativeEvent.offsetX/width) * 100;
        const oY = (e.nativeEvent.offsetY/height) * 100;
        // console.log(Math.floor(oX), Math.floor(oY));
        this.setState({
            x: oX,
            y: oY
        });
    }

    _onMouseOut = () => {
        this.setState({
            x: 0,
            y: 0
        });
    }

    render() {
        
        const {x, y} = this.state;
        const maskStyle = {
            '--maskX': x,
            '--maskY': y
        }
        return (
            <div className="bio" >
            <div className="bio-container">
            <div className="titleContainer"
                onMouseMove={this._onMouseMove}
                onMouseOut={this._onMouseOut}
                ref="titleContainer"
                style={maskStyle}
            >               
                
                    <div className="titleWrapper">
                        <h1>Hello! I'm <strong>Tonny Luganda </strong></h1>
                    </div>
                    <div className="cloneWrapper">
                        <h1>Hello! I'm <strong>Tonny Luganda </strong> </h1>
                    </div>
                </div>

                <div className="about">
                    <p>
                    I am a self taught full-stack developer, passionate about building excellent UX/UI
                    React application that transforms the lives of those around me.
                    </p>
                    {/*  I use a creative 
                    approach to problem solve, always energetic and eager to learn new skills. */}
                </div>
                <Link to="/projects" className="check-projects">
                    <Button label="CLICK ME!"></Button>
                </Link>
            </div>
            </div>
            

        )
    }
}

   
export default About;