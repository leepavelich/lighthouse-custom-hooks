import useCounter from "hooks/useCounter";

const Counter = function(props) {
  const [count, increment, decrement, clear] = useCounter(props.start);

  return (
    <div className = "counter">
      <span>{count}</span>
      <button onClick={decrement}>-</button>
      <button onClick={clear}>0</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;