import './App.css';
import { Routes, Route  } from 'react-router-dom';
import Home from './Pages/home/Home';
import LogIn from './Pages/Log-in';
import Contacts from './Pages/contacts/Contacts';
import Benifits from './Pages/benifits/Benifits';
import Navbar from './components/Navbar';





function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <Routes>
      <Route path="/" element={<LogIn/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Benifits" element={<Benifits/>}/>
      <Route path="/Contacts" element={<Contacts/>}/>
    </Routes>
    </div>
    </>
  );
}

export default App;
