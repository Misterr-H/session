import './App.css';
import Navbar from './components/Navbar';
import Action from './components/Action';
import Categories from './components/Categories';

function App() {
  return (
    <div className='bg-[#2F65D8] text-white'>
      <Navbar/>
      <div className='flex'>
        <h1 className=" text-4xl mx-auto md:hidden flex">freepik</h1>
      </div>
      <Action/>
      <Categories/>
    </div>
  );
}

export default App;
