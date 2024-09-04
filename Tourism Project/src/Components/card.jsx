import { useState } from "react";

function Card({ id, name, image, info, price, notInterestedHandler }) {
  const [readMore, setReadMore] = useState(false);
  const description = readMore
    ? `${info}...`
    : `${info.substring(0, 200)}...  `;

  function readMoreHandler() {
    setReadMore(!readMore);
  }

  return (
    <div className="card">
      <div className="image">
        <img src={image} />
      </div>
      <div>
        <p className="price">{price}</p>
        <p className="city-name">{name}</p>
      </div>

      <div className="des">
        {description}
        <span className="readmore" onClick={readMoreHandler}>
          {readMore ? "Show Less" : "Read More"}
        </span>
      </div>
      <div className="btn">
        <button className="btn-red" onClick={() => notInterestedHandler(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default Card;
