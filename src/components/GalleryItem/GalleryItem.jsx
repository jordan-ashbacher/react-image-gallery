import './GalleryItem.css'

const GalleryItem = ({ item }) => {
    console.log(item)

    const checkLikes = () => {
        if(item.likes === 0) {
            return (<p>Nobody is spinning this record with you</p>)
        } else if (item.likes === 1){
            return (<p>{item.likes} person is spinning this record with you</p>)
        } else {
            return (<p>{item.likes} people are spinning this record with you</p>)
        }
    }

    return (
        <div className="galleryItem">
            <img src={item.path} alt={item.description} />
            <div className="buttonContainer">
                <button>SPIN</button>
                {checkLikes()}
            </div>
            
        </div>
    )
}

export default GalleryItem