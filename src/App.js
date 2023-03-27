//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Labs from "./labs/index";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter/index";
import {BrowserRouter as Router, Link} from "react-router-dom";
import {Routes, Route} from "react-router";



require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

function App() {

    return(
        <Router>
        <div className="container">
            <Routes>
                <Route path="/*"
                       element={<Labs/>}/>
                <Route path="/hello"
                       element={<HelloWorld/>}/>
                <Route path="/tuiter/*"
                       element={<Tuiter/>}/>
            </Routes>
        </div>
        </Router>
    );
}

export default App;
