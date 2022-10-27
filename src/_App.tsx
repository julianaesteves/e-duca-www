import { RoutesApp } from './utils/routes';
import './styles/global/reset.css';
import './styles/global/typography.css';
import { FormProvider } from '../src/utils/contexts/FormContext';

function App() {
  return (
    <>
      
      <FormProvider>
      <RoutesApp />
     </FormProvider>
      
    </>
  );
}

     

export default App;
