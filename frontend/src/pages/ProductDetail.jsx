import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  
  useEffect(() => {
    fetch(`http://localhost:5000/api/fragrances/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div style={{ paddingTop: '200px', textAlign: 'center' }}>Loading...</div>;
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
    </main>
  );
};

export default ProductDetail;
