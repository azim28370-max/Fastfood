import React from 'react';
import pizzaHeroImg from '../../assets/images/pizza-hero.jpg';

export const HeroSection = ({ onOrderNow }) => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Column: Text & CTA */}
        <div className="hero-content">
          <h1 className="hero-title">
            Pizza Perfection in<br />
            Every <span className="highlight-text">Slice!</span>
          </h1>

          <p className="hero-subtitle">
            Your daily dose of Delicious food, Enjoy this.
          </p>

          <div className="hero-cta-wrapper">
            <button className="btn-order-now" onClick={onOrderNow}>
              Order Now
            </button>
          </div>
        </div>

        {/* Right Column: Gourmet Pizza Visual */}
        <div className="hero-image-wrapper">
          <div className="pizza-img-card">
            <img
              src={pizzaHeroImg}
              alt="Pizza Perfection in Every Slice"
              className="hero-pizza-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
