import './GalleryForm.css'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));


const GalleryForm = ({
    handleSubmit,
    newItemPath,
    setNewItemPath,
    newItemDescription,
    setNewItemDescription
}) => {

    const classes = useStyles();

    return (
        <div className="formResetContainer">
            <form className="formContainer" onSubmit={handleSubmit}>
                <p className="addTitle">ADD AN ALBUM:</p>
                <div className="itemURL">
                    <input
                        type="text"
                        InputProps={{
                            className: classes.itemInput
                        }}
                        placeholder="image url"
                        value={newItemPath}
                        onChange={(e) => setNewItemPath(e.target.value)}
                        required
                    />
                </div>
                <div className="itemDescription">
                    <input
                        type="text"
                        className="itemDescriptionInput"
                        placeholder="description"
                        value={newItemDescription}
                        onChange={(e) => setNewItemDescription(e.target.value)}
                        required
                    />
                </div>
                <Button 
                    variant="outlined"
                    classes={{ root: 'submitButton', outlined:'submitButtonOutlined'}}
                    >
                        Add Album
                    </Button>
            </form>
        </div>
    )
}

export default GalleryForm