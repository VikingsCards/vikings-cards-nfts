import React from 'react'
import GIF from '../../Assets/Images/20221015_180501.gif'
import '../css/media.css'
import './Home.css'


const Home = () => {


    return (
        <div>
            <div className="home-box">
                <div className="home-box2">
                    <div className="home-box3">
                        <div className="home-box4">
                            <div className="home-box5">
                                <img src={GIF} alt="GIF-Logo" className="home-img media-home-img" />


                                <div className="home-box6">
                                    <p className="home-p">
                                        “Live with enthusiasm while you are alive, the agile always comes out ahead. I saw the flames of a mansion, but a dead man lay at the door.”
                                    </p>

                                    <p className="home-p2">We invite you to never leave the illusion and have energy in life</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
