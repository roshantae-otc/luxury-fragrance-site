import Hero from '../components/Hero';
import Philosophy from '../components/Philosophy';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';
import { fragrances } from '../data/fragrances';

const Home = () => {
  const featuredProducts = fragrances.slice(0, 3);

  return (
    <main>
      <Hero />
      <Philosophy />
      
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
            <div>
              <span style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>The Collection</span>
              <h2 style={{ fontSize: '32px', marginTop: '15px' }}>Featured Volumes</h2>
            </div>
            <button style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', borderBottom: '1px solid var(--text-primary)' }}>View All</button>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '40px' 
          }}>
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '60px', 
          alignItems: 'center' 
        }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?auto=format&fit=crop&q=80&w=1200" 
              alt="Artisan Craftsmanship" 
              style={{ width: '100%', height: '600px', objectFit: 'cover' }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>The Atelier</span>
            <h2 style={{ fontSize: '42px', margin: '20px 0 30px' }}>A Ritual of <i>Patience</i></h2>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(26, 26, 26, 0.7)', marginBottom: '40px' }}>
              We believe that time is the most precious ingredient. Our fragrances are aged in small batches, allowing the natural molecules to harmonize and deepen over months. It is a slow process, but one that ensures the soul of the scent is fully realized.
            </p>
            <button style={{ 
              backgroundColor: 'var(--text-primary)', 
              color: '#FFF', 
              padding: '18px 45px', 
              fontSize: '11px', 
              letterSpacing: '0.15em', 
              textTransform: 'uppercase' 
            }}>
              Discover Our Story
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
