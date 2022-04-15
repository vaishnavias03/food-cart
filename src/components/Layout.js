import { Outlet, Link } from "react-router-dom";
import "../StyleSheets/Layout.css"

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
  
};

export default Layout;