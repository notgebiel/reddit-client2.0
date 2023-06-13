import './App.css';
//import components
import SearchBar from './components/searchBar';
import NavBar from './components/navbar';
import Post from './components/post';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          app
        </p>
        <NavBar />
        <SearchBar />
        <Post />
      </header>
    </div>
  );
}

export default App;
