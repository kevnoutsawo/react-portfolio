import { useState, useEffect } from 'react'
import './index.scss'
import '../AnimatedLetters'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
  
        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    return (
      <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                        strArray={'About me'.split('')}
                        idx={15}
                    />
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quae eveniet sit voluptatem placeat quaerat. Facere cumque ipsam officiis incidunt nostrum asperiores error quo quasi quis ut natus qui, debitis distinctio. Vitae vero hic reprehenderit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nesciunt labore suscipit corporis exercitationem voluptatibus, laboriosam dicta eum nisi repudiandae?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, vitae?</p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faReact} color="#DD0031" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faJsSquare} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faNodeJs} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
      </>
    )
}

export default About