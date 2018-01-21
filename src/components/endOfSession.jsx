import React, { Component } from 'react';

class EndOfSession extends Component {

    render() {
        return (
            <div>
                <h2>You should repeat:</h2>
                <ul>
                    {this.props.toRepeat.map(phrase => <li>{phrase.obverse} - {phrase.reverse}</li>)}
                </ul>
                <button onClick={this.props.handleRepeat}>Repeat them</button>
                <h2>You've already known:</h2>
                <ul>
                    {this.props.known.map(phrase => <li>{phrase.obverse} - {phrase.reverse}</li>)}
                </ul>
            </div>
        );
    }
}

export default EndOfSession;
