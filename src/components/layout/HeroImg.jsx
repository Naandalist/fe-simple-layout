import React from "react";

const HeroImg = () => {
  return (
    <div>
      <div className='card'>
        <img
          src='https://blogsimages.adobe.com/creative/files/2019/06/AdobeStock_227207295-1.jpeg'
          alt='hero img...'
          style={{ height: "200px", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};
export default HeroImg;
