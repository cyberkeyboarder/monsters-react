import React from "react";
import "./Cards.css";

export const Card = (props) => {
  return (
    <div className="card-container">
    <img alt="monster" 
    src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
      <h3> {props.monster.name} </h3>
      <p>{props.monster.email}</p>
    </div>
  );
};
 