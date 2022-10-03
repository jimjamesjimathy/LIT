import { motion } from 'framer-motion';
import './Home.scss';


const Home = () => {
  return (
    <div className='Home' id='home'>
      <div className="homeBG" />
      <div className="home-wrap">
        <div className="home-top">
          <motion.div
            initial={{opacity: 0, x: '-150%'}}
            animate={{opacity: 1, x: 0}}
            transition={{ease: 'easeOut', duration: 1}}
          >
          <p>welcome to the</p>
          </motion.div>
        </div>
        <div className="home-bottom">
          <motion.div
            initial={{opacity: 0, y: '-150%'}}
            animate={{opacity: 1, y: 0}}
            transition={{ease: 'easeOut', duration: 1.3}}
          >
            <h1>Literary</h1>
          </motion.div>
          <motion.div
            initial={{opacity: 0, y: '150%'}}
            animate={{opacity: 1, y: 0}}
            transition={{ease: 'easeOut', duration: 1.3}}
          >
            <h1>Tavern</h1>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Home