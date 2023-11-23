import logo from './logo.svg';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import Home from './components/pages/Home';
import Sobre from './components/pages/Sobre';
import Servicos from './components/pages/Servicos';
import Contato from './components/pages/Contato';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
      <ul>
        <li><Link to ="/" className='text-light text-decoration-none'><FaHome /> Home </Link></li>
        <li><Link to ="/sobre" className='text-light text-decoration-none'> <BsPersonFill /> Sobre </Link></li>
        <li><Link to ="/servicos" className='text-light text-decoration-none'> <AiFillThunderbolt /> Serviços</Link></li>
        <li><Link to="/contato" className='text-light text-decoration-none'> <IoIosMail /> Contato </Link></li>
      </ul>

      

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/sobre" element={<Sobre/>} />
          <Route path="/servicos" element={<Servicos/>} />
          <Route path="/contato" element={<Contato/>} />
        </Routes>


      </BrowserRouter>
      <footer className="bg-dark fixed-bottom text-center text-lg-start text-white">
      
        <div className="text-center p-3">
          <span>© 2023 Copyright - Todos os Direitos reservados</span>
        </div>
      </footer>
    </>
  );
}

export default App;
