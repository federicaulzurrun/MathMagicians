import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/Quotes';

function App() {
  return (
    <div className="app">
      <Calculator />
      <div>
        <Quote />
      </div>
    </div>
  );
}

export default App;
