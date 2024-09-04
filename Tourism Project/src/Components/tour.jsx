/* eslint-disable react/prop-types */
import Card from "./card";

function Tour({ tours, notInterestedHandler }) {
  return (
    <div>
      <div className="container">
        <h1 className="heading">Plan With Me</h1>
      </div>
      <div className="cards">
        {tours.map((tour) => {
          return (
            <Card
              key={tour.id}
              {...tour}
              notInterestedHandler={notInterestedHandler}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Tour;
