import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { fragrances } from '../data/fragrances';

const Shop = () => {
  const products = fragrances;

  return (
    <main style={{ paddingTop: '150px' }}>
      <div className="container">
        <header style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>The Collection</span>
          <h1 style={{ fontSize: '48px', marginTop: '20px' }}>All Fragrances</h1>
        </header>

        {/* Filter Bar */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '40px', 
          marginBottom: '60px',
          borderBottom: '1px solid rgba(0,0,0,0.05)',
          paddingBottom: '20px'
        }}>
          {['All', 'Woody', 'Floral', 'Fresh', 'Oriental'].map((filter) => (
            <button key={filter} style={{ 
              fontSize: '12px', 
              letterSpacing: '0.15em', 
              textTransform: 'uppercase',
              color: filter === 'All' ? 'var(--text-primary)' : 'rgba(26, 26, 26, 0.4)',
              fontWeight: filter === 'All' ? 500 : 300
            }}>
              {filter}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '60px 40px' }}>
          {products.map((product, index) => (
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
      </div>
    </main>
  );
};

export default Shop;
