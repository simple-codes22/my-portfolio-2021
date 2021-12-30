import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import { Box } from '@mui/material'

const App = () => {
  return (
    <Box style={{background: '#22242b'}} component='div'>
      <Navigation />
      <Footer />
    </Box>
  )
}

export default App
