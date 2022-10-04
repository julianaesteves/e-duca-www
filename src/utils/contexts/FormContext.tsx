// Context, Reducer, Provider, Hook
import { createContext, ReactNode, useContext, useReducer } from 'react';

type State = {
  currentStep: number;
  name: string;
  birthDate: 'dd/mm/aaaa';
  occupation: string;
  carrerTime: string;
  email: string;
  password: string;
  confirmPassword: string;
};
type Action = {
  type: FormActions;
  payload: any;
};
type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
};
type FormProviderProps = {
  children: ReactNode;
};

const initialData = {
  currentStep: 0,
  name: '',
  birthDate: '',
  occupation: '',
  carrerTime: '',
  email: '',
  password: '',
  confirmPassword: '',
};

// Context
const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer
export enum FormActions {
  setCurrentStep,
  setName,
  setBirthDate,
  setOccupation,
  setCarrerTime,
  setEmail,
  setPassword,
  setConfirmPassword,
}
const formReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormActions.setName:
      return { ...state, name: action.payload };
    case FormActions.setBirthDate:
      return { ...state, birthDate: action.payload };
    case FormActions.setOccupation:
      return { ...state, occupation: action.payload };
    case FormActions.setCarrerTime:
      return { ...state, carrerTime: action.payload };
    case FormActions.setEmail:
      return { ...state, email: action.payload };
    case FormActions.setPassword:
      return { ...state, password: action.payload };
    case FormActions.setConfirmPassword:
      return { ...state, confirmPassword: action.payload };
    default:
      return state;
  }
};

// Provider
export const FormProvider = ({ children }: FormProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = { state, dispatch };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

// Context Hook
export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm prescisa ser usado dentro do FormProvider');
  }
  return context;
};
