import { Provider } from "react-redux";
import Main from "./pages/Main";
import store from "./redux/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
