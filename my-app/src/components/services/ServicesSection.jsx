import React from 'react';
import { Truck, UtensilsCrossed, Smartphone, Headphones } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      icon: <Truck size={32} color="#3db80a" />,
      title: 'Fast Home Delivery',
      desc: 'Free ultra-fast delivery on all orders over $25 with insulated thermal packaging to keep food sizzling hot.'
    },
    {
      icon: <UtensilsCrossed size={32} color="#121519" />,
      title: 'Catering & Parties',
      desc: 'Custom party platters, pizza boxes, and bulk food combos tailored for office events and celebrations.'
    },
    {
      icon: <Smartphone size={32} color="#3db80a" />,
      title: 'Easy Mobile Ordering',
      desc: 'Order in just 3 clicks with quick re-order, instant payment options, and live driver tracking.'
    },
    {
      icon: <Headphones size={32} color="#121519" />,
      title: '24/7 Foodie Support',
      desc: 'Our customer support team is ready round the clock to help with your orders and dietary inquiries.'
    }
  ];

  return (
    <section className="services-section">
      <div className="section-container">
        <div className="section-header text-center">
          <span className="section-badge">What We Offer</span>
          <h2 className="section-title">Our Premium Food Services</h2>
          <p className="section-desc">
            Designed to make your food experience seamless, fast, and extraordinarily delicious every single time.
          </p>
        </div>

        <div className="services-grid">
          {services.map((srv, index) => (
            <div key={index} className="service-box">
              <div className="service-icon">{srv.icon}</div>
              <h3>{srv.title}</h3>
              <p>{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
