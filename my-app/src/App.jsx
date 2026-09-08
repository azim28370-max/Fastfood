import React, { useState } from 'react';
import { Navbar } from './components/common/Navbar';
import { HeroSection } from './components/home/HeroSection';
import { AboutSection } from './components/about/AboutSection';
import { ServicesSection } from './components/services/ServicesSection';
import { MenuSection } from './components/menu/MenuSection';
import { Footer } from './components/common/Footer';
import { AuthModal } from './components/auth/AuthModal';
import { CartDrawer } from './components/cart/CartDrawer';
import { OrderCheckoutModal } from './components/checkout/OrderCheckoutModal';
import { ToastContainer } from './components/common/ToastContainer';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';
import './styles/theme.css';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const scrollToMenu = () => {
    setActiveTab('home');
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProceedToCheckout = () => {
    setIsCheckoutOpen(true);
  };

  return (
    <ToastProvider>
      <AuthProvider>
        <CartProvider>
          <div className="app-main">
            {/* Header Navigation Bar */}
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Dynamic Tab / Page Content */}
            {activeTab === 'home' && (
              <>
                <HeroSection onOrderNow={scrollToMenu} />
                <MenuSection />
                <AboutSection />
                <ServicesSection />
              </>
            )}

            {activeTab === 'about' && (
              <>
                <AboutSection />
                <ServicesSection />
              </>
            )}

            {activeTab === 'services' && (
              <>
                <ServicesSection />
                <MenuSection />
              </>
            )}

            {/* Footer */}
            <Footer />

            {/* Login / Sign Up Interactive Modal */}
            <AuthModal />

            {/* Slide-out Shopping Cart Drawer */}
            <CartDrawer onProceedToCheckout={handleProceedToCheckout} />

            {/* Order Checkout Card Modal (In Theme Color) */}
            <OrderCheckoutModal
              isOpen={isCheckoutOpen}
              onClose={() => setIsCheckoutOpen(false)}
            />

            {/* Floating Toast Notification Container */}
            <ToastContainer />
          </div>
        </CartProvider>
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;
