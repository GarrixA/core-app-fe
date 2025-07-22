import { Provider } from "react-redux";
import Index from "./routes/Index";
import { store } from "./store/page";

function App() {
  return (
    <>
      <Provider store={store}>
        <Index />
      </Provider>
    </>
  );
}

export default App;
