import { UserProvider } from "./components/08-UseContext/UserProvider";
import Header from "./components/08-UseContext/08-1-Header";
import Main from "./components/08-UseContext/08-2-Main";

import Index from './components/00-HolaReactJs';
import ComponentsAndPropsExample from './components/01-ComponentsAndProps'
import UseStateExample from "./components/02-UseState";
import UseStateBetaExample from "./components/02-UseState-Beta";
import ListAndConditional from "./components/03-ListAndConditional";
import EventsExample from "./components/04-Events";
import UseEffectProblem from './components/05-UseEffect/05-1-UseEffectProblem';
import UseEffectExample from './components/05-UseEffect/05-0-UseEffectExample';
import UseEffectSolution from './components/05-UseEffect/05-2-UseEffectSolution';
import UseRefExample from './components/06-UseRef/06-0-UseRefExample';
import UseReducerExample from './components/07-UseReducer/07-0-UseReducerExample';
import UseReducerProblem from './components/07-UseReducer/07-1-UseReducerProblem';
import UseReducerSolution from './components/07-UseReducer/07-2-UseReducerSolution';

function App() {
  return (
    <main>
      {/* //////////////////////////////////////// 00 - Hola React //////////////////// */}
      {/* <Index /> */}
      {/* //////////////////////////////////////// 01 - Components and Props //////////////////// */}
      {/* <ComponentsAndPropsExample /> */}
      {/* //////////////////////////////////////// 02 - useState //////////////////// */}
      {/* <UseStateExample /> */}
      {/* <UseStateBetaExample /> */}
      {/* //////////////////////////////////////// 03 - Lists and Conditional Rendering //////////////////// */}
      {/* <ListAndConditional /> */}
      {/* //////////////////////////////////////// 04 - Events //////////////////// */}
      {/* <EventsExample /> */}
      {/* //////////////////////////////////////// 05 - useEffect //////////////////// */}
      <UseEffectExample />
      {/* <UseEffectProblem /> */}
      {/* <UseEffectSolution /> */}
      {/* //////////////////////////////////////// 06 - useRef //////////////////// */}
      {/* <UseRefExample /> */}
      {/* //////////////////////////////////////// 07 - useReducer //////////////////// */}
      {/* <UseReducerExample /> */}
      {/* <UseReducerProblem /> */}
      {/* <UseReducerSolution /> */}
      {/* //////////////////////////////////////// 08 - useContext //////////////////// */}
      {/* <UserProvider>
        <Header />
        <Main />
      </UserProvider> */}
    </main>
  )
}

export default App
