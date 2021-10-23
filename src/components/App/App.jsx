import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    fetchGallery();
  }, []);

const fetchGallery = () => {
  axios.get('/gallery')
  .then(response => {
    setGalleryList(response.data);
  }).catch(error => {
    console.log('Error in GET /gallery', error);
  });
};

const likeItem = (id) => {
  axios.put('/gallery/like/${id}')
  .then((res) => {
    fetchGallery();
  }).catch((err) => {
    console.log('error in PUT', err);
  });
};
  


return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <p>Gallery goes here</p>

    <GalleryList
        list={galleryList}
        onLike={likeItem}
      />
    </div>
  );
}

export default App;


// const getGalleryList = () => {
  //   Axios
  //   .get("/gallery")
  //   .then((response) => {
  //     console.log("Gallery list", response.data);
  //     setGalleryList(response.data);
  //   })
  //   .catch((err) => {
  //     console.log("error getting galleryList", err)
  //   });
  // };