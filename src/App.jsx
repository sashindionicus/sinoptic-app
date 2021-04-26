import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputForm from './components/InputForm';
import InfoCard from './components/InfoCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-muted text-center">Sinoptic 2.0</h1>
        <InputForm />
        <InfoCard />
      </header> 
    </div>
  )
}
<script src="scripts/forecast.js"></script>
export default App; 