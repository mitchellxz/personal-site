import PropTypes from "prop-types";

function Button(props) {
  const color = props.color;

  return (
    <button className="btn btn-primary" style={{ backgroundColor: color }}>
      My Button
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Button;
