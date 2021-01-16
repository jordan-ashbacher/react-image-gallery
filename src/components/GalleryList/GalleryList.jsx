import './GalleryList.css'
import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList({ gallery, addLike, removeItem }) {
    console.log(gallery)

    return (
        <div className="galleryList">
            {gallery.map((item) => (
                <GalleryItem 
                    key={item.id}
                    item={item}
                    addLike={addLike}
                    removeItem = {removeItem}
                />
            ))}
        </div>
    )
}

export default GalleryList