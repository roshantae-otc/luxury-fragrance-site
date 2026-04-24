import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ maxWidth: '700px', margin: '0 auto' }}
        >
          <span style={{ 
            fontSize: '11px', 
            letterSpacing: '0.2em', 
            textTransform: 'uppercase', 
            color: 'var(--accent-gold)',
            display: 'block',
            marginBottom: '30px'
          }}>
            Our Ethos
          </span>
          <h2 style={{ fontSize: '42px', marginBottom: '40px', lineHeight: 1.3 }}>
            Born in light. Crafted in silence. We believe a fragrance should be an aura, not a mask.
          </h2>
          <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--text-primary)', margin: '0 auto 40px' }}></div>
          <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'rgba(26, 26, 26, 0.7)' }}>
            Each creation is a study in balance—between the raw power of nature and the refined touch of the artisan. We source our ingredients from the most remote corners of the world, ensuring that every bottle holds a piece of a distant horizon.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
