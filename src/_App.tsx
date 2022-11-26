import { RoutesApp } from './utils/routes'
import './styles/global/reset.css'
import './styles/global/typography.css'
import { FormProvider } from '../src/utils/contexts/FormContext'
import AuthService from "./services/auth.service";
import { useEffect, useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
// TODO: Validar usuario se professor ou aluno
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  // const logOut = () => {
  //   AuthService.logout();
  // };

  
  return (
    <>
    <div>

        {currentUser && (
          <h1>MUITA DOIDEIRA</h1>
        )}
      </div>
   
   
      <FormProvider>
        <RoutesApp />
      </FormProvider>
    </>
  )
}

export default App
