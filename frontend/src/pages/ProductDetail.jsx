import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { useStore } from '../context/CartContext';
import { fragrances } from '../data/fragrances';

const ProductDetail = () => {
  const { id } = useParams();
  const product = fragrances.find(f => f.id === parseInt(id));
  const { addToCart } = useStore();
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past the main product info
      setShowStickyBar(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!product) return <div style={{ paddingTop: '200px', textAlign: 'center' }}>Fragrance not found.</div>;

  return (
    <main style={{ paddingTop: '120px' }}>
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '80px' }}>
          {/* Left Side - Image Gallery */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '60px', textAlign: 'center' }}>
              <img 
                src={product.image} 
                alt={product.name} 
                style={{ maxWidth: '80%', margin: '0 auto', mixBlendMode: 'multiply' }} 
              />
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
              <img src="https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?auto=format&fit=crop&q=80&w=600" style={{ height: '300px', objectFit: 'cover' }} />
              <img src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=600" style={{ height: '300px', objectFit: 'cover' }} />
            </div>
          </motion.div>

          {/* Right Side - Product Info */}
          <div style={{ position: 'sticky', top: '150px', alignSelf: 'start' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>{product.collection}</span>
            <h1 style={{ fontSize: '48px', margin: '20px 0' }}>{product.name}</h1>
            <p style={{ fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '30px' }}>{product.family}</p>
            <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(26, 26, 26, 0.7)', marginBottom: '40px' }}>
              {product.description}
            </p>

            <div style={{ marginBottom: '40px' }}>
              <h4 style={{ fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '15px' }}>Olfactory Pyramid</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 500, color: 'var(--accent-gold)' }}>TOP: </span>
                  <span style={{ fontSize: '13px' }}>{product.notes.top.join(', ')}</span>
                </div>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 500, color: 'var(--accent-gold)' }}>HEART: </span>
                  <span style={{ fontSize: '13px' }}>{product.notes.heart.join(', ')}</span>
                </div>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 500, color: 'var(--accent-gold)' }}>BASE: </span>
                  <span style={{ fontSize: '13px' }}>{product.notes.base.join(', ')}</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginBottom: '40px' }}>
              <span style={{ fontSize: '24px' }}>${product.price}.00</span>
              <button 
                onClick={() => addToCart(product)}
                style={{ 
                  flexGrow: 1,
                  backgroundColor: 'var(--text-primary)', 
                  color: '#FFF', 
                  padding: '20px', 
                  fontSize: '12px', 
                  letterSpacing: '0.15em', 
                  textTransform: 'uppercase' 
                }}
              >
                Add to Bag
              </button>
            </div>
            
            <p style={{ fontSize: '12px', textAlign: 'center', color: 'rgba(26, 26, 26, 0.5)' }}>
              Complimentary 2ml sample included with your order.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Purchase Bar */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            style={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              width: '100%',
              backgroundColor: '#FFF',
              borderTop: '1px solid #F5F5F3',
              padding: '15px 40px',
              zIndex: 900,
              display: 'flex',
              justifyContent: 'center',
              boxShadow: '0 -10px 30px rgba(0,0,0,0.03)'
            }}
          >
            <div style={{ 
              width: '100%', 
              maxWidth: '1200px', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center' 
            }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <img src={product.image} alt={product.name} style={{ width: '40px', height: '50px', objectFit: 'cover', backgroundColor: '#F5F5F3' }} />
                <div>
                  <h4 style={{ fontSize: '14px', margin: 0 }}>{product.name}</h4>
                  <p style={{ fontSize: '11px', color: 'var(--accent-gold)', margin: 0 }}>{product.collection}</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                <span style={{ fontSize: '18px' }}>${product.price}.00</span>
                <button 
                  onClick={() => addToCart(product)}
                  style={{ 
                    backgroundColor: '#1A1A1A', 
                    color: '#FFF', 
                    padding: '15px 40px', 
                    fontSize: '11px', 
                    letterSpacing: '0.15em', 
                    textTransform: 'uppercase' 
                  }}
                >
                  Add to Bag
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default ProductDetail;
