import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from '../pages/Home';
import { Contact } from '../pages/Contact';
import { Collaborate } from '../pages/Collaborate';
import { Login } from '../pages/Login';
import { SignUp } from '../pages/SignUp';

export const RoutesApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/colabore" element={<Collaborate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<SignUp />} />
      </Routes>
    </Router>

  );
};
