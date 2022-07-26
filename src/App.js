import './App.css';
import CardContainer from './Components/CardContainer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <CardContainer title="Science" />
      <CardContainer title="Life" />
      <CardContainer title="Fiction" />
    </>
  );
}

export default App;
