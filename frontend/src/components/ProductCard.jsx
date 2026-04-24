import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, collection, price, image }) => {
  return (
    <Link to={`/product/${id}`} style={{ display: 'block', group: 'true' }}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ marginBottom: '25px', overflow: 'hidden', backgroundColor: 'var(--bg-secondary)' }}
      >
        <img 
          src={image} 
          alt={name} 
          style={{ 
            width: '100%', 
            aspectRatio: '3/4', 
            objectFit: 'cover',
            mixBlendMode: 'multiply'
          }} 
        />
      </motion.div>
      <div style={{ textAlign: 'center' }}>
        <span style={{ 
          display: 'block', 
          fontSize: '10px', 
          letterSpacing: '0.15em', 
          textTransform: 'uppercase', 
          color: 'rgba(26, 26, 26, 0.5)',
          marginBottom: '8px'
        }}>
          {collection}
        </span>
        <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>{name}</h3>
        <span style={{ fontSize: '14px', color: 'var(--accent-gold)', letterSpacing: '0.05em' }}>
          ${price}.00
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
