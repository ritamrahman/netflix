import React from "react";

function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imssrc} alt="dark image" className="card__img" />
          </div>
          <div className="details">
          <h6 className='catagry'>{props.catagry}</h6>
          <h1 className="title"> {props.title} </h1>
          <a href={props.link} target="_blank" className="link">
            <button >Watch Now</button>
          </a>
          </div>
        
      </div>
    </>
  );
}

export default Card;
