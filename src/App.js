import './App.css';
import Content from './components/content';
import Footer from './components/footer';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
