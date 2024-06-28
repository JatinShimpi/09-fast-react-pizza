import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./Ui/Home";
import Menu from "./Features/menu/Menu";
import Cart from "./Features/cart/Cart";
import CreateOrder from "./Features/order/CreateOrder";
import Order from "./Features/order/Order";
import AppLayout from "./Ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
