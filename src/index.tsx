import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import React360Img from "react-360-img";
import myRoom360Img from "./my-room-360.png";
import ReactDOM from 'react-dom';


ReactDOM.render(
  <React.StrictMode>
        <React360Img imgPath={myRoom360Img} />
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
