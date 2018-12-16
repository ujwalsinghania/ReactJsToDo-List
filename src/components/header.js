import React from "react";
import '../styles/header.scss'
import 'react-materialize'

import { Container} from 'reactstrap';

class Header extends React.Component{
    days= ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    tempDate = new Date();
    currDay = this.days[this.tempDate.getDay()];
    currMonth=this.months[this.tempDate.getMonth()] ;

    render() {
        return (
            <div>
                <Container className={"p-0"}>
                    <svg viewBox="0 0 377.377 183.198">
                        <defs>
                            <style dangerouslySetInnerHTML={{__html: ".a{fill:url(#a);}.b,.c,.d{fill:#fff;font-family:SegoeUI, Segoe UI;}.b{font-size:97px;}.c{font-size:39px;}.d{font-size:26px;}" }} />
                            <linearGradient id="a" y1="0.565" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
                                <stop offset="0" stopColor="#c49ff4"/>
                                <stop offset="1" stopColor="#fd48e5"/>
                            </linearGradient>
                        </defs>
                        <g transform="translate(1 3.38)">
                            <path className="a"
                                  d="M0,181.577S67.417,203.04,192.477,159.1s184.9-37.18,184.9-37.18V3.62H0Z"
                                  transform="translate(-1 -7)"/>
                            <text className="b" transform="translate(17 114)">
                                <tspan x="0" y="0">{this.tempDate.getDate()}</tspan>
                            </text>
                            <text className="c" transform="translate(146 73)">
                                <tspan x="0" y="0">{this.currDay}</tspan>
                            </text>
                            <text className="d" transform="translate(146 111)">
                                <tspan x="0" y="0">{this.currMonth+ ','+ this.tempDate.getFullYear()}</tspan>
                            </text>
                        </g>
                    </svg>
                </Container>
            </div>
        );
    }
}

export {Header} ;