import React from "react";

// DrumMachine gets props from App
class DrumMachine extends React.Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyTrigger);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyTrigger);
  }

  // actionHandlers
  handleKeyTrigger = (key) => {
    if (key.keyCode === this.props.keyCode) {
      this.playSound();
      this.displayChange(this.props.id);
      this.handleFocus();
    }
  };
  handleClick = () => {
    this.playSound();
    this.displayChange(this.props.id);
    this.handleFocus();
  };

  // callBack functions
  playSound = () => {
    const sound = document.getElementById(this.props.keyChar);
    sound.currentTime = 0;
    sound.play();
  };
  displayChange = (id) => {
    this.props.displayUpdateCallBack(id); //callback from App to set state
  };
  handleFocus = () => {
    // const style="background-color"
    const button = document.getElementById(this.props.keyCode);
    button.focus();
    function handleblur() {
      button.blur();
    }
    setTimeout(handleblur, 150);
  };

  render() {
    return (
      <button
        id={this.props.keyCode}
        className="soundKey"
        onClick={this.handleClick}
      >
        {this.props.keyChar}
        <audio
          className="clip"
          id={this.props.keyChar}
          preload="auto"
          src={this.props.url}
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </button>
    );
  }
}

export default DrumMachine;
