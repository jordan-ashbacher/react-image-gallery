import './GalleryList.css'
import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList({ gallery }) {
    console.log(gallery)

    return (
        <div className="galleryList">
            {gallery.map((item) => (
                <GalleryItem 
                    key={item.id}
                    item={item}
                />
            ))}
        </div>
    )
}

export default GalleryList