import './GalleryList.css'

function GalleryList({ gallery }) {
    console.log(gallery)

    return (
        <div className="galleryList">
            GalleryItem goes here
            {/* {gallery.map((item) => {
                <GalleryItem 
                    key={item.id}
                    item={item}
                />
            })} */}
        </div>
    )
}

export default GalleryList