import React from "react";
import CardImage from "./CardImage";
import CardVideo from "./CardVideo";

const Card = () => {
  return (
    <div className='container'>
      <div style={CardStyle}>
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
        <CardImage />
        <CardVideo />
      </div>
    </div>
  );
};

const CardStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default Card;
