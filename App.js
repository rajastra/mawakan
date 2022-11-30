import { Provider } from "react-redux";
import store from "./store";
import Base from "./Base";

// import "./styles.css";

export default function App() {
  return (
    <Provider store={store}>
      <Base />
    </Provider>
  );
}
