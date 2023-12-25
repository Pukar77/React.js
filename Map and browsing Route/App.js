
import './App.css';
import { Navbar } from './Component/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Component/Home/Home';
import { Aboutus } from './Component/Aboutus/Aboutus'

function App() {
  return (

   <>
 

    <BrowserRouter>
    <Navbar></Navbar>
   <Routes>
    <Route path='/' element = {<Home /> } />
    <Route path='/aboutus' element = {<Aboutus/>}/>

    
   </Routes>
   </BrowserRouter>
   </>

  );
}

export default App;
