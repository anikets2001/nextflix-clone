import { Provider } from "react-redux";
import "./App.css";
import Body from "./assets/components/Body";
import appStore from "./assets/utils/Store/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
