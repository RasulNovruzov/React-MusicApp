//import logo from './logo.svg';
import './App.css';
import Menu from '../src/components/Menu/Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './components/Main/MainPage';
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <Route exact path='/' render={() => <MainPage />} />
        <Route path='/contact' render={() => <Contact />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
