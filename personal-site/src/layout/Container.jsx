import PropTypes from "prop-types";

function Container(props) {
  const children = props.children;
  const className = props.className;
  const style = props.style;

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

Container.defaultProps = {
  className: "",
  style: {},
};

export default Container;
