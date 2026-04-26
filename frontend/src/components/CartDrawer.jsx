import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../context/CartContext';
import { X, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, cartTotal } = useStore();
  const shippingThreshold = 150;
  const amountToFreeShipping = shippingThreshold - cartTotal;
  const progressPercentage = Math.min((cartTotal / shippingThreshold) * 100, 100);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.2)',
              backdropFilter: 'blur(4px)',
              zIndex: 2000
            }}
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              height: '100vh',
              width: '400px',
              backgroundColor: '#FFF',
              zIndex: 2001,
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '-10px 0 30px rgba(0,0,0,0.05)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
              <h2 style={{ fontSize: '24px' }}>Your Bag</h2>
              <X onClick={() => setIsCartOpen(false)} style={{ cursor: 'pointer' }} strokeWidth={1.5} />
            </div>

            {/* Free Shipping Tracker */}
            <div style={{ marginBottom: '30px', padding: '20px', backgroundColor: '#F5F5F3', borderRadius: '2px' }}>
              <p style={{ fontSize: '11px', marginBottom: '10px', textAlign: 'center', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                {amountToFreeShipping > 0 
                  ? `You are $${amountToFreeShipping.toFixed(2)} away from Free Shipping`
                  : "You've qualified for Free Shipping!"}
              </p>
              <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(0,0,0,0.1)', position: 'relative' }}>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  style={{ 
                    position: 'absolute', 
                    height: '100%', 
                    backgroundColor: 'var(--accent-gold)',
                    left: 0 
                  }} 
                />
              </div>
            </div>

            <div style={{ flexGrow: 1, overflowY: 'auto' }}>
              {cart.length === 0 ? (
                <p style={{ color: 'rgba(0,0,0,0.5)', textAlign: 'center', marginTop: '40px' }}>Your bag is currently empty.</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} style={{ display: 'flex', gap: '20px', marginBottom: '30px', borderBottom: '1px solid #F5F5F3', paddingBottom: '20px' }}>
                    <img src={item.image} alt={item.name} style={{ width: '80px', height: '100px', objectFit: 'cover', backgroundColor: '#F5F5F3' }} />
                    <div style={{ flexGrow: 1 }}>
                      <h4 style={{ fontSize: '16px', marginBottom: '5px' }}>{item.name}</h4>
                      <p style={{ fontSize: '12px', color: 'rgba(0,0,0,0.5)', marginBottom: '10px' }}>Quantity: {item.quantity}</p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ color: 'var(--accent-gold)' }}>${item.price}.00</span>
                        <Trash2 size={16} onClick={() => removeFromCart(item.id)} style={{ cursor: 'pointer', opacity: 0.5 }} />
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div style={{ paddingTop: '30px', borderTop: '1px solid #F5F5F3' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <span style={{ letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '12px' }}>Total</span>
                  <span style={{ fontSize: '18px' }}>${cartTotal}.00</span>
                </div>
                <Link to="/checkout" onClick={() => setIsCartOpen(false)}>
                  <button style={{
                    width: '100%',
                    backgroundColor: '#1A1A1A',
                    color: '#FFF',
                    padding: '20px',
                    fontSize: '12px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase'
                  }}>
                    Checkout
                  </button>
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
