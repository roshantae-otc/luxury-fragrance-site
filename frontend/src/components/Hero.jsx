import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section style={{ 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      backgroundColor: 'var(--bg-secondary)',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <div className="container" style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        alignItems: 'center',
        gap: '60px'
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ maxWidth: '450px' }}
        >
          <h1 style={{ fontSize: '64px', lineHeight: 1.1, marginBottom: '30px' }}>
            The Poetry of <br /><i>Scented</i> Tales
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(26, 26, 26, 0.8)', marginBottom: '40px', maxWidth: '380px' }}>
            A contemporary collection of olfactory volumes, crafted in the heart of Paris. Each scent is a chapter; each note, a memory.
          </p>
          <button style={{ 
            backgroundColor: 'var(--text-primary)', 
            color: '#FFF', 
            padding: '18px 45px', 
            fontSize: '12px', 
            letterSpacing: '0.15em', 
            textTransform: 'uppercase' 
          }}>
            Explore the Collection
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ position: 'relative' }}
        >
          <img 
            src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=1200" 
            alt="Luxury Perfume" 
            style={{ 
              width: '100%', 
              height: '70vh', 
              objectFit: 'cover',
              boxShadow: '0 50px 100px -20px rgba(0,0,0,0.05)'
            }} 
          />
        </motion.div>
      </div>
      
      <div style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '15px'
      }}>
        <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: '1px', height: '60px', backgroundColor: 'var(--text-primary)', opacity: 0.3 }}></div>
      </div>
    </section>
  );
};

export default Hero;
