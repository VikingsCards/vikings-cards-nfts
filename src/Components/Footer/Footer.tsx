import React from 'react'
import './Footer.css'
import '../css/media.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';





const Footer = () => {
  return (
    <div>
      <div className="footer-box">
        <div className="footer-box2">
          <div className="footer-box3">
            <div className="footer-box4">
              <div className="footer-box5">
                <p className="footer-p media-footer-p">©2022, Vikings Cards NFTs</p>
                <div className="footer-box6">
                  <a rel="noreferrer" target="_blank" href="https://discord.gg/aAT9cVUj5X" className="footer-a"><FontAwesomeIcon className='icon-community' icon={faDiscord} /></a>
                  <a rel="noreferrer" target="_blank" href="https://twitter.com/Vikings_Guild" className="footer-a"><FontAwesomeIcon className='icon-community' icon={faTwitter} /></a>
                </div>
                <p className="footer-p media-footer-p">To conquer the sea of ​​solana</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
