import PropTypes from "prop-types";
import "./Navbar.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href={props.item1href}>
              {props.item1}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={props.item2href}>
              {props.item2}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={props.item3href}>
              {props.item3}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  item1: PropTypes.string,
  item2: PropTypes.string,
  item3: PropTypes.string,
  item1href: PropTypes.string,
  item2href: PropTypes.string,
  item3href: PropTypes.string,
};

export default Navbar;
