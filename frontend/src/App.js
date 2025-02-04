import './App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Pages/Home';
import Chat from './Pages/Chat';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} exact/>
       <Route path="/chats" component={Chat} />
    </div>
  );
}

export default App;
