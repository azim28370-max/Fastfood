import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import {
  X,
  User,
  Phone,
  MapPin,
  CreditCard,
  Banknote,
  Smartphone,
  CheckCircle,
  Clock,
  ShoppingBag,
  FileText
} from 'lucide-react';

export const OrderCheckoutModal = ({ isOpen, onClose }) => {
  const { cart, subtotal, clearCart, setIsCartOpen } = useCart();
  const { user } = useAuth();
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: '',
    address: '',
    landmark: '',
    paymentMethod: 'cod',
    specialInstructions: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderSummary, setOrderSummary] = useState(null);

  if (!isOpen) return null;

  const deliveryFee = subtotal > 0 ? 2.99 : 0;
  const grandTotal = subtotal + deliveryFee;

  const handleSubmitOrder = (e) => {
    e.preventDefault();

    const orderId = 'FF-' + Math.floor(100000 + Math.random() * 900000);
    const summary = {
      orderId,
      items: [...cart],
      total: grandTotal,
      customer: { ...formData },
      estimatedTime: '25-30 mins'
    };

    setOrderSummary(summary);
    setIsSubmitted(true);
    clearCart();

    // Show Toast notification ONLY when user completes information & order is finalized
    showToast(`🎉 Order #${orderId} Placed Successfully! Est. delivery in 25-30 mins.`, 'success', 5000);
  };

  const handleFinish = () => {
    setIsSubmitted(false);
    onClose();
    setIsCartOpen(false);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="checkout-card-modal" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="checkout-card-header">
              <span className="checkout-badge">Fast Delivery Checkout</span>
              <h2>Enter Order Details</h2>
              <p>Please fill in your delivery information to place your order.</p>
            </div>

            {/* Order Brief Pills */}
            <div className="order-brief-pill">
              <div className="brief-item">
                <ShoppingBag size={18} className="brief-icon" />
                <span>{cart.reduce((a, b) => a + b.quantity, 0)} Items</span>
              </div>
              <div className="brief-item">
                <Clock size={18} className="brief-icon" />
                <span>Est: 25-30 min</span>
              </div>
              <div className="brief-total">
                Total: <strong>${grandTotal.toFixed(2)}</strong>
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmitOrder} className="checkout-form">
              <div className="form-grid">
                {/* Full Name */}
                <div className="input-group">
                  <label>Full Name *</label>
                  <div className="input-field">
                    <User size={18} className="field-icon" />
                    <input
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div className="input-group">
                  <label>Phone Number *</label>
                  <div className="input-field">
                    <Phone size={18} className="field-icon" />
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                {/* Delivery Address */}
                <div className="input-group full-width">
                  <label>Delivery Address *</label>
                  <div className="input-field">
                    <MapPin size={18} className="field-icon" />
                    <input
                      type="text"
                      placeholder="Street address, Apartment, Suite number"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                  </div>
                </div>

                {/* Landmark / Notes */}
                <div className="input-group full-width">
                  <label>Special Instructions / Landmark (Optional)</label>
                  <div className="input-field">
                    <FileText size={18} className="field-icon" />
                    <input
                      type="text"
                      placeholder="e.g. Gate code 1234, ring doorbell"
                      value={formData.landmark}
                      onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="payment-section">
                <label className="section-label">Select Payment Method</label>
                <div className="payment-options">
                  <label
                    className={`payment-option ${formData.paymentMethod === 'cod' ? 'active' : ''}`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                    />
                    <Banknote size={20} />
                    <span>Cash on Delivery</span>
                  </label>

                  <label
                    className={`payment-option ${formData.paymentMethod === 'card' ? 'active' : ''}`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'card' })}
                    />
                    <CreditCard size={20} />
                    <span>Credit / Debit Card</span>
                  </label>

                  <label
                    className={`payment-option ${formData.paymentMethod === 'upi' ? 'active' : ''}`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="upi"
                      checked={formData.paymentMethod === 'upi'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'upi' })}
                    />
                    <Smartphone size={20} />
                    <span>UPI / Online Pay</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn-confirm-order">
                Confirm Order • ${grandTotal.toFixed(2)}
              </button>
            </form>
          </>
        ) : (
          /* Confirmation Success Card */
          <div className="order-success-card">
            <div className="success-icon-badge">
              <CheckCircle size={64} color="#3db80a" />
            </div>

            <h2>Order Placed Successfully!</h2>
            <p className="success-subtitle">
              Thank you, <strong>{orderSummary.customer.name}</strong>! Your food is being prepared.
            </p>

            {/* Receipt Summary */}
            <div className="receipt-details">
              <div className="receipt-row">
                <span>Order ID:</span>
                <strong>{orderSummary.orderId}</strong>
              </div>
              <div className="receipt-row">
                <span>Est. Delivery:</span>
                <strong className="green-text">{orderSummary.estimatedTime}</strong>
              </div>
              <div className="receipt-row">
                <span>Deliver To:</span>
                <span>{orderSummary.customer.address}</span>
              </div>
              <div className="receipt-row">
                <span>Payment Mode:</span>
                <span className="capitalize">{orderSummary.customer.paymentMethod === 'cod' ? 'Cash on Delivery' : orderSummary.customer.paymentMethod}</span>
              </div>
              <div className="receipt-row total">
                <span>Total Amount:</span>
                <strong>${orderSummary.total.toFixed(2)}</strong>
              </div>
            </div>

            <button className="btn-finish-order" onClick={handleFinish}>
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
