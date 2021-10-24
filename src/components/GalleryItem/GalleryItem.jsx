import { useState, useEffect } from 'react';
import './GalleryItem.css';



function GalleryItem({ object }) {
  const [likeCount, setLikeCount] = useState(0);
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

  const onLike = () => {
    console.log('clicked');
    setLikeCount(likeCount + 1);
  }
  console.log(likeCount);

  return (
    <span className="objectSpan">

      {toDisplay()}

      <button onClick={onLike} >Like</button>

      <p>{likeCount} likes</p>

    </span>
  );
};

export default GalleryItem;
