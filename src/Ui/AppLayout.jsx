import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import CartOverview from "../Features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  
  const isLoading = navigation.state === "loading"

  return (
    <div className="layout">

    {isLoading && <Loader/>}

      <Header />

      <main>
        <h1>Content</h1>
        <Outlet />
      </main>

      <CartOverview></CartOverview>
    </div>
  );
}

export default AppLayout;
