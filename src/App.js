import Header from './components/header/Header';
import './App.css';
import Home from "./components/home/Home"
import Box from '@mui/material/Box';
// import DataProvider from './context/DataProvider';

function App() {
  return (
    <div>
      <Header />
      <Box style={{ marginTop: 54 }} >
        <Home />
      </Box>
    </div>
  );
}

export default App;
