import './GalleryForm.css'

const GalleryForm = ({ 
    handleSubmit, 
    newItemPath,
    setNewItemPath,
    newItemDescription,
    setNewItemDescription
}) => {

    return (
        <form className="formContainer" onSubmit={handleSubmit}>
            <p className="addTitle">Add an album:</p>
            <div className="itemURL">
                <label>Image URL: </label>
                <input 
                    type="text"
                    className="itemURLInput"
                    placeholder="image url"
                    value={newItemPath}
                    onChange={(e) => setNewItemPath(e.target.value)}
                    required
                />
            </div>
            <div className="itemDescription">
                <label>Description: </label>
                    <input 
                        type="text"
                        className="itemDescriptionInput"
                        placeholder="description"
                        value={newItemDescription}
                        onChange={(e) => setNewItemDescription(e.target.value)}
                        required
                    />
            </div>
            <button className="addItemButton">Add Album</button>
        </form>
    )
}

export default GalleryForm