import Food from './components/food/Menu';
import Header from './components/header/Header';
// import HeadlineCards from './components/headlinecards/HeadlineCards';
import Navbar from './components/navbar/Navbar';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Food />
    </div>
  );
};

export default App;
