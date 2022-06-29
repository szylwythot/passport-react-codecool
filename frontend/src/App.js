import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Header from './components/Header';
// import Footer from './components/Footer';
import Profile from "./components/Profile";
// import Contacts from "./components/Contacts";
// import About from "./components/About";

function App() {
  return (
    <div className="App">
         <BrowserRouter>
            <Routes>
                <Route path="/" element={<Profile/>}/>
                {/* <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contacts/>}/> */}
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;