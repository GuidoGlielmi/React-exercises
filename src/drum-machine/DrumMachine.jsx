import React from 'react';
import styles from './DrumMachine.module.css';
import { DrumPad } from './DrumPad';
import SwitchButton from 'shared/components/buttons/SwitchButton';
const drums = [
  {
    keyCode: 81,
    keyTrigger: 'q',
    id: 'Snare',
    url: 'https://www.musicca.com/files/scripts/drumkit/sound/share-drum.mp3',
  },
  {
    keyCode: 87,
    keyTrigger: 'w',
    id: 'Side-stick',
    url: 'https://www.musicca.com/files/scripts/drumkit/sound/share-stick.mp3',
  },
  {
    keyCode: 69,
    keyTrigger: 'e',
    id: 'Hi-hat',
    url: 'https://www.musicca.com/files/scripts/drumkit/sound/hihat.mp3',
  },
  {
    keyCode: 65,
    keyTrigger: 'a',
    id: 'Open-hi-hat',
    url: 'https://www.musicca.com/files/scripts/drumkit/sound/hihat-open.mp3',
  },
  {
    keyCode: 83,
    keyTrigger: 's',
    id: 'Floor-tom',
    url: 'https://www.musicca.com/files/scripts/drumkit/sound/floor-tom.mp3',
  },
  {
    keyCode: 68,
    keyTrigger: 'd',
    id: 'Tom-1',
    url: 'https://www.musicca.com/files/scripts/drumkit/sound/tom1.mp3',
  },
  {
    keyCode: 90,
    keyTrigger: 'z',
    id: 'Tom-2',
    url: 'https://www.musicca.com/files/scripts/drumkit/sound/tom2.mp3',
  },
  {
    keyCode: 88,
    keyTrigger: 'x',
    id: 'Crash',
    url: 'https://www.musicca.com/files/scripts/drumkit/sound/crash.mp3',
  },
  {
    keyCode: 67,
    keyTrigger: 'c',
    id: 'Ride',
    url: 'https://www.musicca.com/files/scripts/drumkit/sound/ride.mp3',
  },
];

const bass = [
  {
    keyCode: 81,
    keyTrigger: 'q',
    id: 'e1',
    url: 'https://www.musicca.com/lydfiler/bass-guitar/e0.mp3',
  },
  {
    keyCode: 90,
    keyTrigger: 'w',
    id: 'f1',
    url: 'https://www.musicca.com/lydfiler/bass-guitar/e2.mp3',
  },
  {
    keyCode: 88,
    keyTrigger: 'e',
    id: 'f#1',
    url: 'https://www.musicca.com/lydfiler/bass-guitar/e3.mp3',
  },
  {
    keyCode: 65,
    keyTrigger: 'a',
    id: 'g#1',
    url: 'https://www.musicca.com/lydfiler/bass-guitar/e5.mp3',
  },
  {
    keyCode: 87,
    keyTrigger: 's',
    id: 'b1',
    url: 'https://www.musicca.com/lydfiler/bass-guitar/a3.mp3',
  },
  {
    keyCode: 83,
    keyTrigger: 'd',
    id: 'c1',
    url: 'https://www.musicca.com/lydfiler/bass-guitar/a4.mp3',
  },
  {
    keyCode: 68,
    keyTrigger: 'z',
    id: 'c#1',
    url: 'https://www.musicca.com/lydfiler/bass-guitar/a5.mp3',
  },
  {
    keyCode: 69,
    keyTrigger: 'x',
    id: 'd1',
    url: 'https://www.musicca.com/lydfiler/bass-guitar/d1.mp3',
  },
];
export class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      volume: 0.3,
      selectedBank: 0,
      pressedTrack: '',
    };
    this.banks = [drums, bass];
    this.clip = React.createRef();
    this.adjustVolume = this.adjustVolume.bind(this);
    this.showPressedTrack = this.showPressedTrack.bind(this);
  }
  componentDidMount() {}
  adjustVolume({ target }) {
    this.setState({ volume: target.value });
  }
  showPressedTrack(name) {
    this.setState({ pressedTrack: name });
  }
  render() {
    return (
      <div className={styles.drumMachine} id='drum-machine'>
        <p>{this.state.power ? 'On' : 'Off'}</p>
        <SwitchButton
          action={() => this.setState((ps) => ({ power: !ps.power }))}
          trigger={this.state.power}
          timeout={100}
        />
        <div className={styles.padsContainer}>
          <p>{!this.state.selectedBank ? 'Drums' : 'Bass'}</p>
          <div className={styles.pads}>
            {this.banks[this.state.selectedBank].map((b) => {
              return (
                <DrumPad
                  className='drum-pad'
                  src={b.url}
                  id={b.id}
                  volume={this.state.volume}
                  key={b.id}
                  off={!this.state.power}
                  keyTrigger={b.keyTrigger}
                  showPressedTrack={this.showPressedTrack}
                />
              );
            })}
          </div>
        </div>
        {this.state.pressedTrack ? (
          <p className={styles.pressedTrack} id='display'>
            {this.state.pressedTrack}
          </p>
        ) : (
          <p className={styles.pressedTrack}>&nbsp;</p>
        )}
        <div className={styles.volumeSliderContainer}>
          <label htmlFor='volume'>Volume</label>
          <input
            id='volume'
            max='1'
            min='0'
            onChange={this.adjustVolume}
            step='0.01'
            type='range'
            value={this.state.volume}
          />
        </div>
        <div className={styles.switchBanks}>
          <p>Switch banks</p>
          <SwitchButton
            action={() => this.setState((ps) => ({ selectedBank: ps.selectedBank === 0 ? 1 : 0 }))}
            trigger={!this.state.selectedBank}
            timeout={100}
          />
        </div>
      </div>
    );
  }
}
