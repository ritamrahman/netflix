import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './index.css';
import Sdata from './Sdata';

function ncard(val) {
  return <Card
              key={val.id} 
              imssrc={val.imssrc}
              catagry={val.catagry}
              title={val.title}
              link={val.link}
        />;
}

let sdataLenth = Sdata.length;

ReactDOM.render(
  <>
    <h1 className="heading"> Top {sdataLenth} Web Series</h1>
    {Sdata.map(ncard)}
  </>,
  document.getElementById('root')
);
