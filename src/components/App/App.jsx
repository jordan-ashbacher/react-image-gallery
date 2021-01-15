import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'

function App() {

    const [gallery, setGallery] = useState([])
    useEffect(() => getGallery(), [])

    const getGallery = () => {
      axios
      .get('/gallery')
      .then((res) => setGallery(res.data))
      .catch((err) => console.log(err))
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of the Music of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList gallery={gallery} />
      </div>
    );
}

export default App;
