import PropTypes from "prop-types";

function Container(props) {
  const children = props.children;
  const className = props.className;

  return <div className={className}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
