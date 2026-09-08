import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { X, Mail, Lock, User } from 'lucide-react';

export const AuthModal = () => {
  const { authModal, closeModal, loginUser } = useAuth();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  if (!authModal.isOpen) return null;

  const isSignUp = authModal.type === 'signup';

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({
      name: formData.name || formData.email.split('@')[0] || 'Foodie',
      email: formData.email
    });
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={closeModal}>
          <X size={20} />
        </button>

        <div className="modal-header">
          <h2>{isSignUp ? 'Create an Account' : 'Welcome Back'}</h2>
          <p>{isSignUp ? 'Sign up to order delicious food in seconds' : 'Login to manage your orders & fast checkout'}</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {isSignUp && (
            <div className="input-group">
              <label>Full Name</label>
              <div className="input-field">
                <User size={18} className="field-icon" />
                <input
                  type="text"
                  placeholder="John Doe"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            </div>
          )}

          <div className="input-group">
            <label>Email Address</label>
            <div className="input-field">
              <Mail size={18} className="field-icon" />
              <input
                type="email"
                placeholder="name@example.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="input-field">
              <Lock size={18} className="field-icon" />
              <input
                type="password"
                placeholder="••••••••"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
          </div>

          <button type="submit" className="auth-submit-btn">
            {isSignUp ? 'Create Account' : 'Log In'}
          </button>
        </form>
      </div>
    </div>
  );
};
