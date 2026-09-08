import React, { useState } from 'react';
import { Logo } from './Logo';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { ShoppingBag, Menu, X } from 'lucide-react';

export const Navbar = ({ activeTab, setActiveTab }) => {
  const { openLogin, openSignUp, user, logoutUser } = useAuth();
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar-container">
      <div className="navbar-content">
        {/* Logo */}
        <div onClick={() => handleNavClick('home')}>
          <Logo />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="nav-links desktop-only">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`nav-link-btn ${isActive ? 'active' : ''}`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="nav-actions">
          {/* Cart Icon */}
          <button
            className="cart-toggle-btn"
            onClick={() => setIsCartOpen(true)}
            title="View Cart"
          >
            <ShoppingBag size={20} color="#121519" />
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </button>

          <div className="desktop-auth-btns">
            {user ? (
              <div className="user-profile-menu">
                <span className="user-name">Hi, {user.name}</span>
                <button className="btn-logout" onClick={logoutUser}>
                  Logout
                </button>
              </div>
            ) : (
              <>
                <button className="btn-login" onClick={openLogin}>
                  Login
                </button>
                <button className="btn-signup" onClick={openSignUp}>
                  SignUp
                </button>
              </>
            )}
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={26} color="#121519" /> : <Menu size={26} color="#121519" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-menu">
          <nav className="mobile-nav-links">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`mobile-nav-btn ${activeTab === link.id ? 'active' : ''}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="mobile-auth-actions">
            {user ? (
              <div className="mobile-user-box">
                <span>Logged in as <strong>{user.name}</strong></span>
                <button className="btn-logout full" onClick={() => { logoutUser(); setMobileMenuOpen(false); }}>
                  Logout
                </button>
              </div>
            ) : (
              <div className="mobile-auth-grid">
                <button className="btn-login full" onClick={() => { openLogin(); setMobileMenuOpen(false); }}>
                  Login
                </button>
                <button className="btn-signup full" onClick={() => { openSignUp(); setMobileMenuOpen(false); }}>
                  SignUp
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
