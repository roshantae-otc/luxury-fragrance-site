import { motion } from 'framer-motion';
import { useStore } from '../context/CartContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useStore();
  const [isOrdered, setIsOrdered] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate API call and Email Dispatch
    setTimeout(() => {
      clearCart();
      setIsProcessing(false);
      setIsOrdered(true);
    }, 2000);
  };

  if (isOrdered) {
    return (
      <main style={{ paddingTop: '200px', textAlign: 'center', minHeight: '80vh' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>Success</span>
          <h1 style={{ fontSize: '42px', marginTop: '20px', marginBottom: '30px' }}>Your order is <i>confirmed</i>.</h1>
          <p style={{ fontSize: '15px', color: 'rgba(0,0,0,0.6)', marginBottom: '40px' }}>
            A confirmation email has been dispatched to your inbox.<br />
            Thank you for choosing Maison Olfactive.
          </p>
          <Link to="/" style={{ borderBottom: '1px solid #1A1A1A', paddingBottom: '5px', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Return to Maison</Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main style={{ paddingTop: '150px', paddingBottom: '100px' }}>
      <div className="container">
        <header style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>Final Step</span>
          <h1 style={{ fontSize: '48px', marginTop: '20px' }}>Secure Checkout</h1>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '80px' }}>
          {/* Shipping Form */}
          <section>
            <h2 style={{ fontSize: '24px', marginBottom: '40px' }}>Shipping Details</h2>
            <form onSubmit={handlePlaceOrder} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <input type="text" placeholder="First Name" required style={{ padding: '15px', border: '1px solid #EAE7E1', outline: 'none' }} />
                <input type="text" placeholder="Last Name" required style={{ padding: '15px', border: '1px solid #EAE7E1', outline: 'none' }} />
              </div>
              <input type="text" placeholder="Street Address" required style={{ padding: '15px', border: '1px solid #EAE7E1', outline: 'none' }} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <input type="text" placeholder="City" required style={{ padding: '15px', border: '1px solid #EAE7E1', outline: 'none' }} />
                <input type="text" placeholder="Postal Code" required style={{ padding: '15px', border: '1px solid #EAE7E1', outline: 'none' }} />
              </div>
              
              <h2 style={{ fontSize: '24px', margin: '40px 0 20px' }}>Payment</h2>
              <div style={{ padding: '30px', border: '1px solid #EAE7E1', backgroundColor: '#F9F9F8' }}>
                <p style={{ fontSize: '13px', color: 'rgba(0,0,0,0.5)', marginBottom: '20px' }}>Credit / Debit Card</p>
                <input type="text" placeholder="Card Number" required style={{ width: '100%', padding: '15px', border: '1px solid #EAE7E1', outline: 'none', marginBottom: '20px' }} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <input type="text" placeholder="MM/YY" required style={{ padding: '15px', border: '1px solid #EAE7E1', outline: 'none' }} />
                  <input type="text" placeholder="CVC" required style={{ padding: '15px', border: '1px solid #EAE7E1', outline: 'none' }} />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isProcessing || cart.length === 0}
                style={{
                  backgroundColor: '#1A1A1A',
                  color: '#FFF',
                  padding: '20px',
                  fontSize: '12px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginTop: '40px',
                  opacity: (isProcessing || cart.length === 0) ? 0.5 : 1,
                  cursor: (isProcessing || cart.length === 0) ? 'not-allowed' : 'pointer'
                }}
              >
                {isProcessing ? 'Processing Ritual...' : 'Complete Order'}
              </button>
            </form>
          </section>

          {/* Order Summary */}
          <aside style={{ backgroundColor: 'var(--bg-secondary)', padding: '40px', alignSelf: 'start', position: 'sticky', top: '150px' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '30px', letterSpacing: '0.05em' }}>Order Summary</h3>
            {cart.map((item) => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', fontSize: '14px' }}>
                <span>{item.name} (x{item.quantity})</span>
                <span>${item.price * item.quantity}.00</span>
              </div>
            ))}
            <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-between', fontWeight: 400 }}>
              <span style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Total Amount</span>
              <span style={{ fontSize: '20px' }}>${cartTotal}.00</span>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};


export default Checkout;
