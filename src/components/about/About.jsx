import { motion } from "framer-motion";
import "./About.scss";

const About = () => {
  return (
    <div className="About" id="about">
      <div className="about-wrap">
        <div className="about-title">
          <div className="title-wrap">
            <motion.div
              initial={{ opacity: 0, x: "-150%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 1.3 }}
            >
              <h2>About </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: "150%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", duration: 1.3 }}
            >
              <h2>Us</h2>
            </motion.div>
          </div>
        </div>
        <div className="about-left">
          <div className="left-title">
            <h2>What we do</h2>
          </div>
          <div className="left-par">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              facilis ipsa excepturi saepe nobis sit temporibus vel vitae eius,
              quae tenetur blanditiis quos sunt iusto impedit architecto!
              Sapiente, quae veritatis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              facilis ipsa excepturi saepe nobis sit temporibus vel vitae eius,
              quae tenetur blanditiis quos sunt iusto impedit architecto!
              Sapiente, quae veritatis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              facilis ipsa excepturi saepe nobis sit temporibus vel vitae eius,
              quae tenetur blanditiis quos sunt iusto impedit architecto!
              Sapiente, quae veritatis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              facilis ipsa excepturi saepe nobis sit temporibus vel vitae eius,
              quae tenetur blanditiis quos sunt iusto impedit architecto!
              Sapiente, quae veritatis.
            </p>
          </div>
        </div>
        <div className="about-right">
          <img src="https://i.ibb.co/zJZwZLc/outside.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
