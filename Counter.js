import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "./store/counterSlice";
// import {Components}  from'reac
const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const show = useSelector((state) => state.counter.Showcounter);
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increasetHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>-- {counter} --</div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increasetHandler}>increase by 5</button>

        <button onClick={decrementHandler}>decrement</button>
      </div>
    </main>
  );
};
// class Counter extends Components {
//   incrementHandler() {
//     this.props.increment()
//   }
//   decrementHandler() {
//     this.props.decrement()

//   }
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>

//         <div className={classes.value}>-- {this.props.counter} --</div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>decrement</button>
//         </div>
//       </main>
//     );
//   }
// }

// const mapStateToProps=()=>{
//   return{

// const mapDispatchToProps=()=>{
//   return{
//     increment: ()=>dispatch({type:'increment'});
//     decrement: ()=>dispatch({type:'decrement'});

//   }
// }

export default Counter;
