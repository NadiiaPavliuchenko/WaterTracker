import { motion } from 'framer-motion';
import { BottleBox } from './BottleAnimation.styled';

const BottleAnimation = () => {
  return (
    <>
      <BottleBox>
        <motion.img
          initial={{ y: -2000, rotateZ: -90 }}
          animate={{
            y: [-2000, 400, -20, 15, 0],
            rotateZ: [45, 0, -45, 15, -5, 0],
          }}
          transition={{ duration: 5, ease: 'easeInOut' }}
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
          animate={{ opacity: [0, 0.5, 1, 0] }}
          transition={{ duration: 2.5, delay: 0.3, ease: 'easeInOut' }}
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
          animate={{ opacity: [0, 0.5, 1, 0] }}
          transition={{ duration: 2.5, delay: 0.4, ease: 'easeInOut' }}
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
          animate={{
            width: ['100px', '0px', '254px', '90px'],
          }}
          transition={{ duration: 5, delay: 0, ease: 'easeInOut' }}
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
      </BottleBox>
    </>
  );
};

export default BottleAnimation;
