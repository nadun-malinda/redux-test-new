import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter'
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter)
  const show = useSelector(state => state.counter.showCounter)
  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const decrementHandler = () => {
    dispatch(counterActions.decremnet())
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(5))
  }

  const decreaseHandler = () => {
    dispatch(counterActions.decrease(5))
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}

      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={decreaseHandler}>Decrease</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
