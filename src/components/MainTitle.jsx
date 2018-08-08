import React from "react";
import profilePic from "../images/JudahProfilePic2018.png";

export default class MainTitle extends React.Component {
  state = {
    text: "",
    counter: 0,
    isCalculating: false
  };

  constructor() {
    super();
    this.startFlip = this.startFlip.bind(this);
  }

  componentDidMount() {
    this.setState({ text: this.props.text });
    //this.setState({ text: this.props.text, counter: 0 });
    this.startFlip();
  }

  startFlip() {
    if (this.state.isCalculating === true) return;
    this.setState({ counter: 0, isCalculating: true });
    this.timerID = setInterval(() => this.tick(), 100);
  }

  tick() {
    if (this.state.counter >= this.props.text.length / 2) {
      clearInterval(this.timerID);
      this.setState({ isCalculating: false });
      if (this.state.text === this.props.text) this.startFlip();
    } else {
      this.flipChars();
    }
  }

  flipChars() {
    const c = this.state.counter;
    const chars = this.state.text.split("");
    const firstChar = this.state.text.charAt(c);
    const secondChar = this.state.text.charAt(chars.length - (c + 1));

    //flip first char
    chars[c] = secondChar;

    //flip second char
    chars[chars.length - (c + 1)] = firstChar;

    this.setState({ text: chars.join(""), counter: c + 1 });
  }

  getText() {
    return this.state.text;
  }

  getDesc() {
    return this.props.desc;
  }

  render() {
    return (
      <React.Fragment>
        <div className="App-body-header">
          <div className="App-body-header-container">
            <div className="Title-container">
              <h2 className="Title-name">
                <a onClick={this.startFlip}>{this.getText()}</a>
              </h2>
              <h2 className="Title-desc">{this.getDesc()}</h2>
            </div>
            {this.props.showPic
              ? <img src={profilePic} className="Title-pic" />
              : null
            }
          </div>
        </div>
      </React.Fragment>
    );
  }
}
