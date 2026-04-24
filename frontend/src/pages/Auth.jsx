import { useState } from 'react';
import { motion } from 'framer-motion';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main style={{ paddingTop: '150px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ maxWidth: '400px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center' }}
        >
          <span style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>
            {isLogin ? 'Welcome Back' : 'Join the Maison'}
          </span>
          <h1 style={{ fontSize: '32px', marginTop: '10px', marginBottom: '40px' }}>
            {isLogin ? 'Sign In' : 'Create Account'}
          </h1>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {!isLogin && (
              <input 
                type="text" 
                placeholder="Full Name" 
                style={{ padding: '15px', border: '1px solid #EAE7E1', outline: 'none', fontSize: '14px' }} 
              />
            )}
            <input 
              type="email" 
              placeholder="Email Address" 
              style={{ padding: '15px', border: '1px solid #EAE7E1', outline: 'none', fontSize: '14px' }} 
            />
            <input 
              type="password" 
              placeholder="Password" 
              style={{ padding: '15px', border: '1px solid #EAE7E1', outline: 'none', fontSize: '14px' }} 
            />
            
            <button style={{
              backgroundColor: '#1A1A1A',
              color: '#FFF',
              padding: '18px',
              fontSize: '12px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginTop: '10px'
            }}>
              {isLogin ? 'Sign In' : 'Register'}
            </button>
          </form>

          <p style={{ marginTop: '30px', fontSize: '13px', color: 'rgba(0,0,0,0.5)' }}>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span 
              onClick={() => setIsLogin(!isLogin)}
              style={{ color: 'var(--text-primary)', cursor: 'pointer', textDecoration: 'underline' }}
            >
              {isLogin ? 'Register here' : 'Login here'}
            </span>
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default Auth;
