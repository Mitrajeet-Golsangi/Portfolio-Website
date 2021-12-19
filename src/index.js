import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Scrollbars from 'react-custom-scrollbars-2';

ReactDOM.render(
  <React.StrictMode>
    {/* <Scrollbars
      universal
      autoHide
      autoHideTimeout={1000}
      style={{
        width: "100vw",
        height: "100vh",
      }}> */}
    <App />
    {/* </Scrollbars> */}
  </React.StrictMode>,
  document.getElementById('root')
);
