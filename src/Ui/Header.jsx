import { Link } from "react-router-dom";
import Searchorder from "../Features/order/Searchorder";

function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza Co.</Link>

      <Searchorder/>

      <p>Jatin</p>
    </header>
  );
}

export default Header;
