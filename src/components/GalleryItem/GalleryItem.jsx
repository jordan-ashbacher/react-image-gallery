import './GalleryItem.css'
import { useState } from 'react'

const GalleryItem = ({ item, addLike }) => {
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

    const handleClick = () => {
        addLike(item)
    }

    return (
        <div className="galleryItem" onClick={toggleDescription} >
            {isDescriptionVisible ? 
                <>
                <div className="descriptionContainer">
                    <p>{item.description}</p>
                </div>
                <button onClick={handleClick}>SPIN</button>
                {checkLikes()}
                </>
                :
                <>
                <img src={item.path} alt={item.description} />
                <button onClick={handleClick}>SPIN</button>
                {checkLikes()}
                </>
            }   
        </div>
    )
}

export default GalleryItem