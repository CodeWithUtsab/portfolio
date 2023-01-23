import React from "react";
import { Link } from "react-scroll";

const Card = (props) => {
  return (
    <>
      <div className="box btn_shadow">
        <img src={props.image} alt="" />
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <Link to="/">
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </>
  );
};

export default Card;
