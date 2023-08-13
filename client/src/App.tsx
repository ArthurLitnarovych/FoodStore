import Food from './components/food/Menu';
import Header from './components/header/Header';
// import HeadlineCards from './components/headlinecards/HeadlineCards';
import Navbar from './components/navbar/Navbar';
import { data } from './components/food/foodData';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Food 
      foods = {data}
      />
    </div>
  );
};

export default App;
