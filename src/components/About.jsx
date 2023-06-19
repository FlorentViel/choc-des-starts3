import { fadeIn, textVariant } from '../utils/motion'

import React from 'react'
import { SectionWrapper } from '../hoc'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { services } from '../constants'
import { styles } from '../styles'

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right","spring", 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
          <div options={{
            max:45,
            scale:1,
            speed:450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
            <h3 className='text-white text-[20px] font-bold text-center'>  {title}</h3>
          </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>A propos de moi.</h2>
    </motion.div>
    <motion.p variants={fadeIn("","", 0.1,1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
    
    Je suis un développeur d'applications <span className="font-bold text-white-100">full stack</span>, formé en JavaScript et Php, et doté d'une solide expérience dans des frameworks tels que <span className="font-bold text-red-700">React</span>, <span className="font-bold text-green-700">Node.Js</span> et <span className="font-bold text-white-100">Three.Js</span>. Ma capacité d'apprentissage rapide et ma volonté de travailler en étroite collaboration avec mes collègues me permettent de créer des solutions efficaces, évolutives et conviviales qui résolvent les problèmes du monde réel. Ensemble, donnons vie à vos idées !


    </motion.p>
    <motion.p variants={fadeIn("left","", 0.1,1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'> 
    Originaire de Cali, en Colombie, j'ai déménagé en France il y a trois ans. Outre ma passion pour la programmation, j'apprécie également jouer de la musique et je suis fier de détenir une licence de football FFF. Ma nature sociable me pousse à passer du temps de qualité avec ma famille et mes amis.

N'hésitez pas à parcourir mon site web pour en savoir plus sur mes compétences et mes réalisations. Je suis impatient de collaborer avec vous et de relever de nouveaux défis passionnants !
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper( About, "about")