import React from 'react';
import { Award, Clock, ShieldCheck, Flame } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="section-container">
        <div className="section-header text-center">
          <span className="section-badge">Our Story</span>
          <h2 className="section-title">Fresh Ingredients, Crafted with Passion</h2>
          <p className="section-desc">
            We bring you authentic stone-baked pizzas, juicy gourmet burgers, and artisan fast food made fresh to order daily.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="icon-wrapper green">
              <Flame size={28} />
            </div>
            <h3>Stone Baked Fresh</h3>
            <p>Hand-stretched dough baked in 500°C wood-fired ovens for that perfect smoky crisp crust.</p>
          </div>

          <div className="feature-card">
            <div className="icon-wrapper dark">
              <Clock size={28} />
            </div>
            <h3>30 Min Delivery</h3>
            <p>Piping hot meal delivered right to your doorstep with real-time GPS order tracking.</p>
          </div>

          <div className="feature-card">
            <div className="icon-wrapper green">
              <ShieldCheck size={28} />
            </div>
            <h3>100% Quality Guaranteed</h3>
            <p>Organic farm-fresh tomatoes, artisan mozzarella, and zero artificial preservatives.</p>
          </div>

          <div className="feature-card">
            <div className="icon-wrapper dark">
              <Award size={28} />
            </div>
            <h3>Top Rated Taste</h3>
            <p>Over 50,000+ happy foodies served with a 4.9-star average rating.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
