import React from 'react';
import ReactDOM from 'react-dom';

//import './App.css';



class uhr extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.ticker = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.tick);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
        <div className="clock"> 
        <h1>Aktuelle Uhrzeit: {this.state.date.toLocaleTimeString()}</h1>
        </div>

    );

  }
}

export default uhr;
