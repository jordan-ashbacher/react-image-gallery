import './GalleryItem.css'
import { useState } from 'react'

const GalleryItem = ({ item, addLike, removeItem }) => {
    console.log(item)

    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false)

    const checkLikes = () => {
        if (item.likes === 0) {
            return (<p>Nobody is spinning this record with you</p>)
        } else if (item.likes === 1) {
            return (<p>{item.likes} person is spinning this record with you</p>)
        } else {
            return (<p>{item.likes} people are spinning this record with you</p>)
        }
    }

    const toggleDescription = () => {
        setIsDescriptionVisible(!isDescriptionVisible)
    }

    const handleSpin = () => {
        addLike(item)
    }

    const handleRemove = () => {
        removeItem(item)
    }

    return (
        <div className="galleryItem">
            {isDescriptionVisible ? 
                <>
                <div className="descriptionContainer" onClick={toggleDescription}>
                    <p>{item.description}</p>
                </div>
                <button onClick={handleSpin}>SPIN</button>
                <button onClick={handleRemove}>REMOVE</button>
                {checkLikes()}
                </>
                :
                <>
                <img src={item.path} alt={item.description} onClick={toggleDescription} />
                <button onClick={handleSpin}>SPIN</button>
                <button onClick={handleRemove}>REMOVE</button>
                {checkLikes()}
                </>
            }   
        </div>
    )
}

export default GalleryItem