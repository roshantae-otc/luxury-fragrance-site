import { motion } from 'framer-motion';
import { useStore } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { wishlist } = useStore();

  return (
    <main style={{ paddingTop: '150px', minHeight: '80vh' }}>
      <div className="container">
        <header style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>Your Curated List</span>
          <h1 style={{ fontSize: '48px', marginTop: '20px' }}>Wishlist</h1>
        </header>

        {wishlist.length === 0 ? (
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <p style={{ fontSize: '16px', color: 'rgba(0,0,0,0.5)', marginBottom: '30px' }}>Your wishlist is currently empty.</p>
            <Link to="/shop" style={{ borderBottom: '1px solid #1A1A1A', paddingBottom: '5px', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Explore Fragrances</Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '60px 40px' }}>
            {wishlist.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Wishlist;
