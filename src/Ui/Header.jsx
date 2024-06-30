import { Link } from "react-router-dom";
import Searchorder from "../Features/order/Searchorder";
import Username from "../Features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>

      <Searchorder />

      <Username />
    </header>
  );
}

export default Header;
