import React from 'react';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <Logo />
          <p>
            Delivering hot, stone-baked pizzas & gourmet fast food straight to your door with fresh organic ingredients every day.
          </p>
        </div>

        <div className="footer-links-group">
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#menu">Our Menu</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Food Categories</h4>
            <ul>
              <li><a href="#menu">Stone-baked Pizza</a></li>
              <li><a href="#menu">Gourmet Burgers</a></li>
              <li><a href="#menu">Loaded Fries & Sides</a></li>
              <li><a href="#menu">Craft Shakes & Drinks</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Opening Hours</h4>
            <p>Monday - Sunday</p>
            <span className="hours">10:00 AM - 11:00 PM</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 FAST FOOD Inc. All rights reserved. Made for food lovers.</p>
      </div>
    </footer>
  );
};
