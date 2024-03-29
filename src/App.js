import './App.css';
import Navbar from './components/navbar/Navbar';
import "./App.scss"
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;