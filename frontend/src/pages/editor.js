import React, { Component } from 'react';

const Editor = () => {
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fileName: '',
        fileContent: '',
      };
    }

    handleFileChange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        console.log('file loaded', reader.result);
        this.setState({ fileName: file.name, fileContent: reader.result });
      };
      reader.onerror = () => {
        console.log('file error', reader.error);
      };
    };

    render() {
      return (
        <div>
          <h1>File Reader</h1>
          <input type="file" onChange={this.handleFileChange}></input>
          <br />
          <p>File Name: {this.state.fileName}</p>
          <p>File Content: {this.state.fileContent}</p>
        </div>
      );
    }
  }

  return (
    <>
      <h1>Editor</h1>
      <App />
    </>
  );
};

export default Editor;
