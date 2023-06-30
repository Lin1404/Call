import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home";
import ErrorScreen from "./components/error/ErrorScreen";
// import Header from "./components/header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorScreen />,
  },
]);

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <div className="App-content">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
