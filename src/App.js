import React from 'react';
import './assets/sass/app.sass';
import Gallery from './components/Gallery'
import Form from './components/Form'
import { Link, Route, Routes } from "react-router-dom"

const App = () => {
  

  return (
    <div className='app'>
      <nav>
        <ul className="flex justify-center items-center pt-10 space-x-5 font-medium text-lg">
          <li><Link to="/">Gallery</Link></li>
          <li><Link to="/form">Form</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
