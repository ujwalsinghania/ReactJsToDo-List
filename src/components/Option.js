import React from "react";
import '../styles/option.scss'
import {Col, Container, Row} from "reactstrap";


class Option extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false
        };

    }

    handleChange= () => {
        this.setState({
            checked: !this.state.checked
        }) ;
    };
    handleFill= (priority) => {
        if(priority=='1'){
            return "#77d6c5" ;
        }
        if(priority==='2') {
            return "#ff9800";
        }
        if(priority=== '3'){
            return "#e91e63" ;
            }
        };

    render() {
        return (
            <div>
                <Container className={!this.state.checked ? "default" : "default lighter"}>
                    <Row className={"m-0 p-3"}>
                        <Col xs={2}>
                            <svg width="18" height="80">
                                <g>
                                    <line x1="9" y1="5" x2="9" y2="80" stroke={"black"} strokeWidth={0.5} />

                                </g>
                                <g>
                                    <ellipse ry="6" rx="6" id="svg_2" cy="9" cx="9" strokeWidth="0" stroke="#000" fill={this.handleFill(this.props.priority)}/>
                                </g>
                            </svg>
                        </Col>

                        <Col xs={10}>
                               <Row className={"m-0 d-flex"}>
                                   <span className={"time flex-grow-1"}>{this.props.time}</span>
                                   <span className={"delete"} onClick={() => this.props.handleDel(this.props.task)}>
                                       <svg width="22" height="22" viewBox="0 0 48 48"><title>ic delete forever 48px</title>
                                            <g fill="#565656">
                                                <path d="M12 38c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V14H12v24zm4.93-14.24l2.83-2.83L24 25.17l4.24-4.24 2.83 2.83L26.83 28l4.24 4.24-2.83 2.83L24 30.83l-4.24 4.24-2.83-2.83L21.17 28l-4.24-4.24zM31 8l-2-2H19l-2 2h-7v4h28V8z"></path>
                                            </g>
                                        </svg>
                                   </span>
                                   <span className={"check"} onClick={this.handleChange}>
                                        {!this.state.checked ?
                                            <svg width="20" height="20" viewBox="0 0 48 48">
                                                <g fill="#020202">
                                                    <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"></path>
                                                </g>
                                            </svg> :
                                            <svg width="20" height="20" viewBox="0 0 48 48">
                                                <g fill="#020202">
                                                    <path d="M18 32.34L9.66 24l-2.83 2.83L18 38l24-24-2.83-2.83z"></path>
                                                </g>
                                            </svg>
                                        }
                                    </span>
                               </Row>
                            <Row className={"m-0"}>
                                <p className={"task"}>{this.props.task}</p>
                            </Row>
                        </Col>
                    </Row>

                </Container>

               </div>
        )
    } ;
}
export {Option}