import React from 'react';
import PadButton from 'shared/components/buttons/PadButton';

export class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.clip = React.createRef();
    this.play = this.play.bind(this);
  }
  play() {
    const sound = this.clip.current;
    if (!sound.ended) {
      sound.pause();
      sound.currentTime = 0;
    }
    sound.play();
    this.props.showPressedTrack(this.props.id);
  }
  componentDidUpdate() {
    // this fires when props.volume (any prop) changes
    this.clip.current.volume = this.props.volume;
  }
  render() {
    return (
      <>
        <PadButton action={this.play} disabled={this.props.off} keyTrigger={this.props.keyTrigger}>
          {this.props.keyTrigger.toUpperCase()}
          <br />
          {this.props.id}
        </PadButton>
        <audio ref={this.clip} src={this.props.src} className='clip' id={this.props.keyTrigger} />
      </>
    );
  }
}
