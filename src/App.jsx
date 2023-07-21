import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Event from "./pages/createEvent/Event";
import router from "./router/Router";

function App() {
  // const nameOfrouter = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/event",
  //     element: <Event />,
  //   },
  // ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
