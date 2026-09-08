import React, { useState } from 'react';
import { foodCategories, foodItems } from '../../data/foodData';
import { useCart } from '../../context/CartContext';
import { Star, Plus, Check } from 'lucide-react';

export const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [addedItem, setAddedItem] = useState(null);
  const { addToCart } = useCart();

  const filteredItems = activeCategory === 'all'
    ? foodItems
    : foodItems.filter((item) => item.category === activeCategory);

  const handleAdd = (item) => {
    addToCart(item);
    setAddedItem(item.id);
    setTimeout(() => setAddedItem(null), 1500);
  };

  return (
    <section className="menu-section" id="menu">
      <div className="section-container">
        <div className="section-header text-center">
          <span className="section-badge">Delicious Menu</span>
          <h2 className="section-title">Explore Our Crave-Worthy Menu</h2>
          <p className="section-desc">
            Choose your favorite pizza, burgers, sides and drinks for instant delivery.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="category-tabs">
          {foodCategories.map((cat) => (
            <button
              key={cat.id}
              className={`cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Food Items Grid */}
        <div className="food-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="food-card">
              <div className="food-img-wrapper">
                <img src={item.image} alt={item.name} className="food-img" />
                <span className="food-badge">{item.badge}</span>
              </div>

              <div className="food-details">
                <div className="food-meta">
                  <div className="food-rating">
                    <Star size={14} fill="#f59e0b" color="#f59e0b" />
                    <span>{item.rating} ({item.reviews})</span>
                  </div>
                  <span className="food-time">{item.prepTime}</span>
                </div>

                <h3 className="food-name">{item.name}</h3>
                <p className="food-desc">{item.description}</p>

                <div className="food-footer">
                  <div className="food-price">
                    <span className="currency">$</span>
                    <span className="amount">{item.price.toFixed(2)}</span>
                  </div>

                  <button
                    className={`btn-add-cart ${addedItem === item.id ? 'added' : ''}`}
                    onClick={() => handleAdd(item)}
                  >
                    {addedItem === item.id ? (
                      <>
                        <Check size={16} /> Added
                      </>
                    ) : (
                      <>
                        <Plus size={16} /> Add to Cart
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
