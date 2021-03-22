import logo from './logo.svg';
import './App.css';
import Header from './components/pages/Header/Header';
import Main from './components/pages/Main/main';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
