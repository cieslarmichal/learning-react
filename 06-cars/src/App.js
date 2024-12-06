import CarForm from './components/CarForm';
import CarList from './components/CarList';
import CarSearch from './components/CarSearch';
import CarValue from './components/CarValue';

function App() {
  return (
    <div>
      <h1>Cars</h1>
      <CarValue />
      <CarSearch />
      <CarList />
      <CarForm />
    </div>
  );
}

export default App;
