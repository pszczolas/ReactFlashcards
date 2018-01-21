import React, { Component } from 'react';
import FlashCard from './flashCard';
import EndOfSession from './endOfSession';
import FileUploader from './fileUploader';

class RevisionSession extends Component {
    constructor(props) {
        super(props);
        this.state = { phraseIndex: 0 }
    }
    toRepeat = [];
    known = [];
    phrases = [];

    markAsKnown = (e) => {
        e.preventDefault();
        this.known.push(this.phrases[this.state.phraseIndex]);
        const nextIndex = this.state.phraseIndex + 1;
        this.setState({phraseIndex: nextIndex});
    }

    markAsToRepeat = (e) => {
        e.preventDefault();
        this.toRepeat.push(this.phrases[this.state.phraseIndex]);
        const nextIndex = this.state.phraseIndex + 1;
        this.setState({phraseIndex: nextIndex});
    }

    repeat = e => {
        e.preventDefault();
        this.phrases = this.toRepeat.splice(0,this.toRepeat.length)
        this.setState({phraseIndex: 0})
    }

    fileRead = fileContent => {
        console.log(fileContent);        
        this.phrases = JSON.parse(fileContent);
        console.log(this.phrases);
        this.setState({phraseIndex: 0})
    }

    render() {
        //TODO refactor:
        //move some responsibilities to separated components
        // change names of props in FlashCard component
        //init git repo

        //TODO features:
        //use any api (dictionary or ocr ???)
        //allow user to seve flashcards in local storage
        //css (or scaa ???)
        

        const content = this.state.phraseIndex < this.phrases.length ? 
        <FlashCard phrase={this.phrases[this.state.phraseIndex]} x={this.markAsKnown} y={this.markAsToRepeat}/>
        :
        <EndOfSession toRepeat={this.toRepeat} known={this.known} handleRepeat={this.repeat}/>        

        return (
            <div>
                <FileUploader onFileRead={this.fileRead}/>
                {content}
            </div>
        );
    }
}

export default RevisionSession;
