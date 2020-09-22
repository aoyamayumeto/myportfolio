import React from 'react'
import aoyama from './aoyama.jpg';
import management from './management.jpg';
import "./App.css";
const Content = (props) => {
  return (
    <div>
      <img src={aoyama} className="aoyamaImage"/>
      <img src={management} className="managementImage"/>
    </div>
  )
};

export default Content