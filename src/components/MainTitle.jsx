import React from "react";
import profilePic from "../images/JudahProfilePic2018Flat.jpg";
import '../componentsCss/MainTitle.css';

export default class MainTitle extends React.Component {
  constructor() {
    super();
    this.startFlip = this.startFlip.bind(this);
  }

  state = {
    text: "",
    counter: 0,
    isCalculating: false
  };

  componentDidMount() {
    this.setState({ text: this.props.text });
    this.startFlip();
  }

  componentWillUnmount() {
    // Making sure that the interval doesn't attempt to call tick() on an unmounted component
    clearInterval(this.timerID);
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

  render() {
    const { text } = this.state;
    const { desc: description } = this.props;
    return (
      <div className="MainTitle">
        <div className="MainTitle-container">
          <a onClick={this.startFlip}>
            <h2 className="MainTitle-name">
              {text}
            </h2>
          </a>
          <h2 className="MainTitle-desc">{description}</h2>
          <div className="MainTitle-image-container">
            <img src={profilePic} className="MainTitle-image" />
          </div>
        </div>
      </div>
    );
  }
}
