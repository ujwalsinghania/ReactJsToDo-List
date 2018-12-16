import React from 'react';
import '../styles/modal.scss'
import Modal from 'react-modal'
import {Input} from 'react-materialize'

import {Row,Container} from "reactstrap";
import Timekeeper from 'react-timekeeper';


class FormModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disable: true,
            displayTimepicker: false,
            time: '6:50 am'
        };
        this.handleTimeChange = this.handleTimeChange.bind(this)

    }

    handleAddOption = (e) => {
        e.preventDefault() ;
        const task = document.getElementById("task").value;
        const time= this.state.time ;
        const priority= document.getElementById("prior").value;

        this.props.UserInput(task,time,priority) ;
        this.props.close();
    };

    handleChange= ()=>{
        const task = document.getElementById("task").value;
        const priority= document.getElementById("prior").value;

        if ((task && priority)=== ""){
            this.setState({
                disable: true
            })
        }
        else{
            this.setState({
                disable: false,

            })
        }
    };
    handleTimeChange(newTime){
        this.setState({ time: newTime.formatted})
    }

    toggleTimekeeper(val){
        this.setState({displayTimepicker: val})
    }

    render(){
        return(
            <div>
                <Modal isOpen={this.props.open}
                       contentLabel="Enter Task"
                       ariaHideApp={false}
                       className={"myContentClass"}
                       overlayClassName={"myOverlayClass"}
                >
                    <Container>
                        <Row className={"paddings"}>
                            <button  type="button" className="custom_btn" onClick={this.props.close}>
                                <svg width="30" height="30" viewBox="0 0 48 48"><title>ic keyboard arrow left 48px</title>
                                    <g fill="#565656">
                                        <path d="M30.83 32.67l-9.17-9.17 9.17-9.17L28 11.5l-12 12 12 12z"></path>
                                    </g>
                                </svg>
                            </button>
                        </Row>

                        <Container className={"form"}>
                            <Row>
                                <h3 className={"headings"}>Enter Task</h3>
                            </Row>

                            <form onSubmit={this.handleAddOption}>
                                <Row>
                                    <Input s={6} label="Enter Task Name" type="text" id="task" onChange={this.handleChange}/>
                                </Row>
                                <Row>
                                    {this.state.displayTimepicker ?
                                        <Timekeeper
                                            id="timing"
                                            onChange={this.handleTimeChange}
                                            onDoneClick={() => {
                                                this.toggleTimekeeper(false)
                                            }}
                                            switchToMinuteOnHourSelect={true}
                                        />
                                        :
                                        false
                                    }
                                    <Input onClick={() => this.toggleTimekeeper(true)} label={this.state.time}/>
                                </Row>
                                <Row>
                                    <Input s={12} label="Priority" type="select" id="prior" onChange={this.handleChange}>
                                        <option value='1'>Low</option>
                                        <option value='2'>Medium</option>
                                        <option value='3'>High</option>
                                    </Input>
                                </Row>
                                    <Row className={"px-2"}>
                                    <button type="submit" className="btn btn-block"
                                            disabled={this.state.disable}>Add Task</button>
                                    </Row>
                            </form>
                        </Container>
                    </Container>
                </Modal>
            </div>

        )
    }
}



export {FormModal}