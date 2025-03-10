import me from '../../../assets/me/home.png'
import { motion } from 'framer-motion'

const MyPhoto = () => {
  const rootStyles = getComputedStyle(document.documentElement)
  const primaryColor = rootStyles.getPropertyValue('--primary-color').trim()

  return (
    <div className="circle_container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: 'easeIn' },
        }}
        className="photo_container"
      >
        <img alt="" src={me} />
      </motion.div>
      <motion.svg
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
        className="animated_circle"
      >
        <motion.circle
          cx={253}
          cy={253}
          r={250}
          stroke={'#000000'}
          strokeWidth={6}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: '24 10 0 0' }}
          animate={{
            strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </motion.svg>
    </div>
  )
}

export default MyPhoto
