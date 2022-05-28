import { useState, useEffect, useRef } from 'react'
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
  
        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_4v7ukia',
                'template_u27bw0e',
                refForm.current,
                'U6ClSDEQh1U9FLGI3'
            )
            .then(
                (result) => {
                    alert('Message successfully sent!')
                    console.log(result)
                    window.location.reload(false)
                },
                (error) => {
                    alert('Failed to send the message, please try again.')
                    console.error(error)
                }
            )
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={'Contact me'.split('')}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, optio non eveniet neque enim iure nulla sunt maxime quod cupiditate libero exercitationem, quasi beatae tempore voluptates excepturi quidem sit laborum?
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name='name' placeholder='Name' required />
                                </li>
                                <li className="half">
                                    <input type="email" name="emain" placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea name="message" placeholder='Message' required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Kevin Noutsawo,
                    <br />
                    Cameroon,
                    <br />
                    Faith Street 57, 36400 <br />
                    Bafoussam <br />
                    <span>kevnoutsawo@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[44.96366, 19.61045]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[44.96366, 19.61045]}>
                            <Popup>I connect to the world from here.</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact