import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Routers/AppRouter";
import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
      <Footer />
    </BrowserRouter>
);
};

export default App;

