import { Provider } from "react-redux";
import { store } from "./app/store";
import { Counter } from "./Counter";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
