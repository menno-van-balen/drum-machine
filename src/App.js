import React from "react";
import "./App.css";
import DrumMachine from "./components/DrumMachine";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleDisplay = (id) => {
    this.setState({ display: id });
  };
  render() {
    // passing props to DrumMachine
    // personal note: 3 arguments are needed because drumsounds is an array with objects...??!
    let drumKeys = drumSounds.map((arr, i, drumSounds) => {
      return (
        <DrumMachine
          key={drumSounds[i].keyCode}
          keyCode={drumSounds[i].keyCode}
          keyChar={drumSounds[i].keyChar}
          drumSounds
          id={drumSounds[i].id}
          url={drumSounds[i].url}
          displayUpdateCallBack={this.handleDisplay}
        />
      );
    });

    return (
      <div className="App">
        <div id="drum-machine">
          <div className="display">
            <p id="display">{this.state.display}</p>
          </div>
          <div className="drum-pad">{drumKeys}</div>
        </div>
      </div>
    );
  }
}

export default App;

const drumSounds = [
  {
    keyCode: 81,
    keyChar: "Q",
    id: "Cev_H2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
  {
    keyCode: 87,
    keyChar: "W",
    id: "Dry_Ohh",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
  {
    keyCode: 69,
    keyChar: "E",
    id: "Dsc_Oh",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 65,
    keyChar: "A",
    id: "Heater-6",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 83,
    keyChar: "S",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 68,
    keyChar: "D",
    id: "Bld_H1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  {
    keyCode: 90,
    keyChar: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    keyCode: 88,
    keyChar: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  {
    keyCode: 67,
    keyChar: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
];
