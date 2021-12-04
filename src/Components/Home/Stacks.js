import { makeStyles } from "@mui/styles";
import { Box } from '@mui/material';

const stackStyle = makeStyles(theme => ({
    root: {
        color: 'white'
    }
}))

const Stacks = () => {
    const useStyle = stackStyle();
    return (
        <Box component='div' className={useStyle.root}>
            Stacks
        </Box>
    )
}

export default Stacks
