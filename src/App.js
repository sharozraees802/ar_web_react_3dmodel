
import './App.css';
import {TryOn} from './components/TryOn/TryOn';
// import './styles/TryOn.style.css';
function App() {
  return (
    <div className="App">
    <TryOn onReady={this}/>
  </div>
  );
}

export default App;
