import React from 'react';
import { useCart } from '../../context/CartContext';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';

export const CartDrawer = ({ onProceedToCheckout }) => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal
  } = useCart();

  if (!isCartOpen) return null;

  const deliveryFee = subtotal > 0 ? 2.99 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="cart-overlay" onClick={() => setIsCartOpen(false)}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <div className="cart-title">
            <ShoppingBag size={22} />
            <h2>Your Cart ({cart.reduce((a, b) => a + b.quantity, 0)})</h2>
          </div>
          <button className="cart-close" onClick={() => setIsCartOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty-state">
            <ShoppingBag size={48} color="#9ca3af" />
            <p>Your cart is empty</p>
            <span>Add some delicious pizza or burgers to get started!</span>
          </div>
        ) : (
          <>
            <div className="cart-items-list">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <span className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</span>
                    <div className="cart-qty-ctrl">
                      <button onClick={() => updateQuantity(item.id, -1)}>
                        <Minus size={14} />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}>
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                  <button
                    className="cart-item-remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Delivery Fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button className="btn-checkout" onClick={onProceedToCheckout}>
                Proceed to Checkout • ${total.toFixed(2)}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
