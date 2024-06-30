import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import CartOverview from "../Features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl">
          {/* <h1>Content</h1> */}
          <Outlet />
        </main>
      </div>

      <CartOverview></CartOverview>
    </div>
  );
}

export default AppLayout;
