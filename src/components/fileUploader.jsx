import React, { Component } from 'react';

class FileUploader extends Component {

    //onFileRead = (fileContent) => this.props.onFileRead(fileContent);

    readFile = (event) => {
        var input = event.target;
        let onFileRead = this.props.onFileRead;
        var reader = new FileReader();
        reader.onload = function(){
          console.log(reader.result);
            onFileRead(reader.result);
        };
        reader.readAsText(input.files[0]);
    }


    render() {
        return (
            <div>
                <input 
                    type='file' 
                    onChange={(event)=> this.readFile(event) }
                    onClick={(event)=> event.target.value = null}>
                </input>
                <button>Load flash cards</button>
            </div>
        );
    }
}

export default FileUploader;
