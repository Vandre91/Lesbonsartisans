import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <br/>
          <h2>
            Upload your file here
          </h2>
          <br/>
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="card-body row no-gutters align-items-center">
                  <div className="col-auto">
                  <i className="fas fa-download h4 text-body"></i>
                  </div>
                  <div className="col">
                    <FilePond server='http://localhost:8000/file/LoadFile'/>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
