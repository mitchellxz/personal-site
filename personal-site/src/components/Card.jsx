import PropTypes from "prop-types";

function Card(props) {
  return (
    <div>
      <div className="card" style={{ width: "22rem" }}>
        <img src={props.image} className="card-img-top" />
        <div className="card-body">
          <p className="card-text">{props.cardContent}</p>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string,
  cardContent: PropTypes.string,
};

export default Card;
