import React from 'react';
import ReactDOM from 'react-dom';
import Chidori from './Chidori';
import Bankai from './Bankai';
import Styles from './Index.css';


const App = () => {
  return (
        <div className="styles">
          <Chidori/>
          <span className="vs">vs</span>
          <Bankai/>
        </div>
      )
  }





ReactDOM.render(<App/>, document.querySelector('#root'));
