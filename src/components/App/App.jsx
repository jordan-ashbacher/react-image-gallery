import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'
import GalleryForm from '../GalleryForm/GalleryForm'

function App() {

    const [gallery, setGallery] = useState([])
    const [newItemPath, setNewItemPath] = useState('')
    const [newItemDescription, setNewItemDescription] = useState('')
    useEffect(() => getGallery(), [])

    const getGallery = () => {
      axios
      .get('/gallery')
      .then((res) => setGallery(res.data))
      .catch((err) => console.log(err))
    }

    const addLike = (item) => {
      console.log('clicked ID:', item.id)
      axios
      .put(`/gallery/like/${item.id}`)
      .then((response) => getGallery())
      .catch((err) => console.log(err))

    }

    const handleSubmit = (e) => {
      console.log('in handleSubmit')
      e.preventDefault()

      console.log('newItem:', {
        path: newItemPath,
        description: newItemDescription
      })

      axios
      .post('/gallery', {
        path: newItemPath,
        description: newItemDescription
      })
      .then((response) => {
        getGallery()
        setNewItemPath('')
        setNewItemDescription('')
      }).catch((err) => console.log(err))
    }

    const removeItem = (item) => {
      console.log('itemID to remove:', item.id)

      axios
      .delete(`/gallery/delete/${item.id}`)
      .then((response) => getGallery())
      .catch((err) => console.log(err))
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of the Music of My Life</h1>
        </header>
        <main>
          <GalleryForm 
            handleSubmit={handleSubmit}
            newItemPath={newItemPath}
            setNewItemPath={setNewItemPath}
            newItemDescription={newItemDescription}
            setNewItemDescription={setNewItemDescription}
          />
          <GalleryList 
            gallery={gallery} 
            addLike={addLike}
            removeItem={removeItem}
            />
        </main>
        
      </div>
    );
}

export default App;
