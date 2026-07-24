import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import './App.css';
import Navbar from './Navbar';
import Counter from './Counter';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar />
      <Counter />
      <Footer />
    </>
  );
}

export default App;
