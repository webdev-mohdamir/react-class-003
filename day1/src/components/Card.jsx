import EquillibriumImg from "../assets/images/image-equilibrium.jpg";
import AvatarImg from "../assets/images/image-avatar.png";
import ClockImg from "../assets/images/icon-clock.svg";
import EtheriumImg from "../assets/images/icon-ethereum.svg";

const Card = () => {
  return (
    <div className="card">
      {/* Card Header */}
      <div className="card__header">
        {/* Imgae */}
        <img src={EquillibriumImg} alt="Equillibrium" />
      </div>

      {/* Card Body */}
      <div className="card__body">
        {/* Heading */}
        <h1>Equilibrium #3469</h1>

        {/* Description */}
        <p className="card_desc">
          Our Equilibrium collection promotes balance and calm.
        </p>

        {/* Pricing and Time */}
        <div className="card__price_time">
          {/* Pricing */}
          <div className="card__price">
            {/* Icon */}
            <img src={EtheriumImg} alt="" />

            {/* Price */}
            <span>0.041 ETH</span>
          </div>

          {/* Time */}
          <div className="card__time">
            {/* Clock Icon */}
            <img src={ClockImg} alt="clock" />

            {/* time */}
            <span>3 days left</span>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="card__hr" />
      {/* <div></div> */}

      {/* Card Footer */}
      <div className="card__footer">
        {/* Author Image */}
        <div className="card__author">
          <img src={AvatarImg} alt="Avatar" />
        </div>

        {/* Created By */}
        <p className="card__author_name">
          Creation of <span>Jules Wyvern</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
