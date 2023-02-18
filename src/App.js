import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import ComponentWithJSX from "./components/ComponentWithJSX";
import ComponentWithoutJSX from './components/ComponentWithoutJSX';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';

function App() {
  return (
    <div className="App">
      <UserGreeting></UserGreeting>
      {/* <ParentComponent></ParentComponent> */}
      {/* <EventBind></EventBind> */}
      {/* <FunctionClick/>
      <ClassClick/> */}
      {/* <Counter/> */}
      {/* <Greet name = "Bruce" heroName = "Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name = "Clark" heroName = "Superman">
        <button>Action</button>
      </Greet>
  <Greet name = "Diana" heroName = "Wonder Woman"/>*/}
      {/* <Welcome name = "Bruce" heroName = "Batman"></Welcome> */}
      {/*<Welcome name = "Clark" heroName = "Superman"></Welcome> */}
      {/* <Welcome name = "Diana" heroName = "Wonder Woman"></Welcome> */}
      {/* <ComponentWithJSX />
      <ComponentWithoutJSX />
      <Message/> */}
    </div>
  );
}

export default App;
