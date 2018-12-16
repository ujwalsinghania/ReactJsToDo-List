import React, { Component } from 'react';
import './App.css';
import {Header} from './components/header'
import {FormModal} from "./components/modal";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {Options} from "./components/Options";

library.add(faPlus);


class App extends Component {
  constructor(props){
    super(props);

    this.state = {

        options: [
            {task: 'Buy milk, juice and vegetables', time: '08:00 AM', priority: 'medium'},
            {task: 'Check if homework is complete', time: '10:30 PM', priority: 'high'}
            ],

        show: false
    };

    this.showModal= this.showModal.bind(this);
      this.closeModal= this.closeModal.bind(this) ;
      this.HandleValues= this.HandleValues.bind(this);
    this.handleDeleteOptions= this.handleDeleteOptions.bind(this) ;
  }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({options}))
            }
        }
        catch (e) {

        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json) ;
            console.log('saving data') ;
        }
    }

  showModal(){
    this.setState({
        show: true
    })
  }

    closeModal(){
        this.setState({
            show: false
        })
    }

    HandleValues= (tasks,times,prioritys) => {

        this.setState((prevState) => {
            return{
                options: prevState.options.concat({task: tasks, time: times, priority: prioritys})
            }
        })
  };

    handleDeleteOptions= optionToRemove => {


        const new_list= this.state.options.filter((item) => item.task!==optionToRemove);

        console.log(new_list) ;
        this.setState({
            options: new_list
        })
    } ;

  render() {
    return (
      <div>
          <Header />

          <div style={{bottom: '45px', right: '40px' , position: 'fixed', width: '40px'}}>
              <a className="btn-floating btn-medium waves-effect waves-light black" onClick={this.showModal}>
              <i className="material-icons" >add</i></a>
          </div>

              <FormModal open={this.state.show}
                     close={this.closeModal}
                     UserInput={this.HandleValues}
          />

          <Options
            arrays={this.state.options}
            handleDelete={this.handleDeleteOptions}
          />

          </div>

    );
  }
}

export default App;
