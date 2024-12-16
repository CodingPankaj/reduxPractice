import { useDispatch, useSelector } from "react-redux";
import { decreaseCount, increaseCount } from "./features/count/countSlice";

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  return (
    <section>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch(increaseCount())}>Increase</button>
        <button onClick={() => dispatch(decreaseCount())}>Decrease</button>
      </div>
    </section>
  );
};
