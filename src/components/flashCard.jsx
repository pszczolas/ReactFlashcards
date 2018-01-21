import React, { Component } from 'react';

class FlashCard extends Component {
  constructor(props) {
    super(props);
    this.state = {showObverse: true, flipped: false};
  }

  componentWillReceiveProps(nextProps) {
    this.setState({showObverse: true ,flipped: false});
  }

  onFlipClick = (e) => {
    e.preventDefault();
    const toggled = !this.state.showObverse;
    this.setState({showObverse: toggled, flipped: true});
  }

  render() {
    const side = this.state.showObverse ? this.props.phrase.obverse : this.props.phrase.reverse;
    return (
      <div>
          <p> {side} </p>
          <button onClick={this.onFlipClick}>Flip</button>
          {this.state.flipped && <button onClick={this.props.x}>I knewn</button>}
          {this.state.flipped && <button onClick={this.props.y}>Didn't know</button>}
      </div>
    );
  }
}

export default FlashCard;
