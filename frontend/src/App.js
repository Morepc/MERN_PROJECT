
import './App.css';
import LandingPage from './Screen/LandingPage/LandingPage';
import Mynotes from './Screen/Mynotes/Mynotes'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import {BrowserRouter,Route, Routes} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={LandingPage} exact></Route>
        <Route path="/Mynotes" Component={Mynotes} exact></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
