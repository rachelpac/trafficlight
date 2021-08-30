import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class LightOne extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redlightone: "brightness(0.5)",
      redlighttwo: "brightness(0.5)",
      greenlightone: "brightness(0.5)",
      greenlighttwo: "brightness(0.5)"
    }
  }

  turnOffLight = () => {
    this.setState({redlightone: "brightness(0.5)",
    redlighttwo: "brightness(0.5)",
    greenlightone: "brightness(0.5)",
    greenlighttwo: "brightness(0.5)"})
  }

  turnOnRedLightOne = () => {
    this.setState({redlightone: "brightness(1)"});
    this.setState({greenlighttwo: "brightness(1)"});
  }

  turnOnGreenLightOne = () => {
    this.setState({greenlightone: "brightness(1)"});
    this.setState({redlighttwo: "brightness(1)"});
  }

  turnOnRedLightTwo = () => {
    this.setState({redlighttwo: "brightness(1)"});
    this.setState({greenlightone: "brightness(1)"});
  }

  turnOnGreenLightTwo = () => {
    this.setState({greenlighttwo: "brightness(1)"});
    this.setState({redlightone: "brightness(1)"});
  }

  render() {

    return (
      <div className="container">
      <div className="light-container">
      <div className="rectangle">
        <div id="red-light-one" className="circle red" onMouseOver={this.turnOnRedLightOne} onMouseOut={this.turnOffLight} style={{filter: this.state.redlightone}}></div>
        <div id="green-light-one" className="circle green" onMouseOver={this.turnOnGreenLightOne} onMouseOut={this.turnOffLight} style={{filter: this.state.greenlightone}}></div>
      </div>

      <div className="rectangle">
        <div id="red-light-two" className="circle red" onMouseOver={this.turnOnRedLightTwo} onMouseOut={this.turnOffLight} style={{filter: this.state.redlighttwo}}></div>
        <div id="green-light-two" className="circle green" onMouseOver={this.turnOnGreenLightTwo} onMouseOut={this.turnOffLight} style={{filter: this.state.greenlighttwo}}></div>
      </div>
      </div>
      </div>
    );
  }
}

function App() {
  return <LightOne />;
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
