import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Contact } from '../pages/Contact';
import { Collaborate } from '../pages/Collaborate';
import { Login } from '../pages/Login';
import { SignUp } from '../pages/SignUp';

export const RoutesApp = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Collaborate" element={<Collaborate />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
