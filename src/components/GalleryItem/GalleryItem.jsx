import { useState, useEffect } from 'react';
import './GalleryItem.css';



function GalleryItem({object, onLike}) {
    const [showImg, setShowImg] = useState(true);
    const toggleImg = event => setShowImg(!showImg);
  
    const toDisplay = () => {
      if (showImg) {
        return (
          <img src={object.path} onClick={toggleImg} />
        );
      } else {
        return (
          <p onClick={toggleImg}>{object.description}</p>
        );
      };
    };
  
    return (
      <span className="objectSpan">
  
        {toDisplay()}
  
        <button onClick={() => onLike(object.id)}>Like</button>
  
        <p>{object.likes} likes</p>
        
      </span>
    );
  };
  
  export default GalleryItem;
  