
import './App.css';
import NavBar from './compo/NavBar';
import Body from './compo/Body';

function App() {
  return (
    <div className="App">
      <header className="header">
        <NavBar/>
      </header>
      <body className="body" >
        <Body/>
      </body>
    </div>
  );
}

export default App;
