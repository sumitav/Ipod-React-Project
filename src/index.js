import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
var ZingTouch = require('zingtouch');
var touchArea = document.getElementsByClassName('circular-menu')[0];
var myRegion = new ZingTouch.Region(touchArea);
console.log()
myRegion.bind(touchArea, 'rotate', function(e){
    console.log(e.detail);
});