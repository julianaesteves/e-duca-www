import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Contact } from '../pages/Contact';
import { Collaborate } from '../pages/Collaborate';
import { Login } from '../pages/Login';
import { FormStep1 } from '../pages/SignUp/FormStep1';
import { FormStep2 } from '../pages/SignUp/FormStep2';
import { FormStudent } from '../pages/SignUp/FormStudent';
import  Error from "../pages/Error"

export const RoutesApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/colabore" element={<Collaborate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro/professor/etapa1" element={<FormStep1 />} />
        <Route path="/cadastro/professor/etapa2" element={<FormStep2 />} />
        <Route path="/cadastro/estudante" element={<FormStudent />} />
        <Route path="/erro404" element={<Error />} />
      </Routes>
    </Router>
  );
};
