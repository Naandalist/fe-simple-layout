import React from "react";

const CardImage = () => {
  return (
    <div className='card'>
      <img
        src='https://blogsimages.adobe.com/creative/files/2019/06/AdobeStock_227207295-1.jpeg'
        alt='card contain..'
        style={{ width: "100%", objectFit: "cover" }}
      />
      <h3>
        <a href='#!'>lorem ipsum</a>
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel
        massa ut nisl accumsan laoreet. Duis viverra nunc nec blandit semper.
        Suspendisse vel eros nisi.
      </p>
    </div>
  );
};

export default CardImage;
