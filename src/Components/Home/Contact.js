import { makeStyles } from "@mui/styles"
import { Box } from "@mui/system"

const contactStyle = makeStyles(theme => ({
    root: {
        color: 'white'
    }
}))

const Contact = () => {
    const useStyle = contactStyle();

    return (
        <Box component='div' className={useStyle.root}>
            Contact
        </Box>
    )
}

export default Contact
