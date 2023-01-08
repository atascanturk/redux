import './App.css';
import Home from './pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './features/counter/counterSlice';

function App() {
 
  const dispatch = useDispatch();

  const {counter} = useSelector(state => state.counter)


  return (
    <div className="App">
     <button onClick={()=> dispatch(decrement())}>-</button>
     <span>{counter}</span>
     <button onClick ={()=> dispatch(increment())}>+</button>

     <Home></Home>
    </div>
  );
}

export default App;
