import { motion } from 'framer-motion';

const BottleAnimation = () => {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          display: 'block',
          width: '374px',
          height: '278px',
          bottom: '30px',
          right: '5%',
          zIndex: '3',
        }}
      >
        <motion.img
          initial={{ y: -960, scale: 1 }}
          animate={{ y: 0, scale: [0.5, 0.8, 1] }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          src="/images/animation/bottle.png"
          alt=""
          height="240px"
          width="108px"
          style={{
            position: 'absolute',
            bottom: '6px',
            right: '135.5px',
            zIndex: '3',
          }}
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.3, 0.5, 0.7, 1] }}
          transition={{ duration: 1.5, delay: 1.5, ease: 'easeInOut' }}
          src="/images/animation/splash.png"
          width="254.15px"
          height="83.93px"
          style={{
            position: 'absolute',
            bottom: '6px',
            right: '50%',
            transform: 'translateX(50%)',
            zIndex: '3',
          }}
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.3, 0.5, 0.7, 1] }}
          transition={{ duration: 1.5, delay: 1.7, ease: 'easeInOut' }}
          src="/images/animation/splash2.png"
          width="169.54px"
          height="103.54px"
          style={{
            position: 'absolute',
            bottom: '6px',
            right: '50%',
            transform: 'translateX(50%)',
            zIndex: '3',
          }}
        />
        <motion.img
          initial={{ width: '100px' }}
          animate={{ width: ['100px', '254px', '90px'] }}
          transition={{ duration: 1.5, delay: 1.5, ease: 'easeInOut' }}
          src="/images/animation/shadow.png"
          width="254px"
          style={{
            position: 'absolute',
            bottom: '6px',
            right: '50%',
            transform: 'translateX(50%)',
            zIndex: '2',
          }}
        />
      </div>
    </>
  );
};

export default BottleAnimation;
