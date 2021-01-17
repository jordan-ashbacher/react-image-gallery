import './GalleryItem.css'
import { useState } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import AlbumIcon from '@material-ui/icons/Album'

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));


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

    const classes = useStyles();

    return (
        <div className="galleryItem">
            {isDescriptionVisible ? 
                <>
                <div className="descriptionContainer" onClick={toggleDescription}>
                    <p>{item.description}</p>
                </div>
                <Button onClick={handleSpin}>SPIN</Button>
                <Button 
                    onClick={handleRemove}
                    variant="outlined"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    >
                        REMOVE
                    </Button>
                {checkLikes()}
                </>
                :
                <>
                <img src={item.path} alt={item.description} onClick={toggleDescription} />
                <Button 
                    onClick={handleSpin}
                    variant="outlined"
                    classes={{ root: 'spinButton', outlined:'spinButtonOutlined'}}
                    startIcon={<AlbumIcon />}
                    >
                        SPIN
                    </Button>
                <Button 
                    onClick={handleRemove}
                    variant="outlined"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    >
                        REMOVE
                    </Button>
                {checkLikes()}
                </>
            }   
        </div>
    )
}

export default GalleryItem