import Header from './components/header/Header';
import './App.css';
import Home from "./components/home/Home"
import Box from '@mui/material/Box';
import DataProvider from './context/DataProvider';

function App() {
  return (
    <DataProvider>
      <Header />
      <Box style={{ marginTop: 54 }} >
        <Home />
      </Box>
    </DataProvider>
  );
}

export default App;
