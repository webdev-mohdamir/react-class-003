import EquillibriumImg from "../assets/images/image-equilibrium.jpg";
import AvatarImg from "../assets/images/image-avatar.png";
import ClockImg from "../assets/images/icon-clock.svg";
import EtheriumImg from "../assets/images/icon-ethereum.svg";
import EyeIcon from "../assets/images/icon-view.svg";

import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card">
      {/* Card Header */}
      <div className="card__header">
        {/* Imgae */}
        <img src={EquillibriumImg} alt="Equillibrium" />

        <div className="overlay">
          {/* Overlay */}
          <div className="overlay_bg"></div>
          {/* Icon */}
          <img
            src={EyeIcon}
            className="overlay_icon"
            width={25}
            height={25}
            alt="eye"
          />
        </div>
      </div>

      {/* Card Body */}
      <div className="card__body">
        {/* Heading */}
        <h1 className="active_link">
          {/* <a href="#" className="card__heading">
            Equilibrium #3469
          </a> */}
          <Link to="#" className="card__heading">
            {props.heading}
          </Link>
        </h1>

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
          Creation of{" "}
          <a href="#" className="active_link">
            {props.author}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Card;
