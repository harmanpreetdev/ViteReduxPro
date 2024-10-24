import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { store } from "@/app/store";
import { AppRoutes } from "@/routes";

function App() {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <div className="App">
          <AppRoutes />
        </div>
      </HelmetProvider>
    </Provider>
  );
}

export default App;
