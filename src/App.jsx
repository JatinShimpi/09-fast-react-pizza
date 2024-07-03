import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./Ui/Home";
import Menu, { loader as menuLoader } from "./Features/menu/Menu";
import Cart from "./Features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./Features/order/CreateOrder";
import Order, { loader as orderLoader } from "./Features/order/Order";
import AppLayout from "./Ui/AppLayout";
import Error from "./Ui/Error";
import { action as updateOrderActions } from "./Features/order/UpdateOrder";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        errorElement: <Error />,
        loader: menuLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderActions,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
