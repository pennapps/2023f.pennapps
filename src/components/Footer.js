import React from 'react'
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import footer from "../images/footer-background.svg";
import footer_mobile from "../images/footer-background.svg";
import penn_logo_white from "../images/penn_logo_white.svg";



function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-content-layout">
            <div className="flex flex-row space-x-[60px]">
              <div className="flex flex-col space-y-0">
                <h1>PENN<br/>&nbsp;APPS</h1>
                <p>&copy; 2023 PennApps</p>
                <a href="mailto: contact@pennapps.com">
                  <p>contact@pennapps.com</p>
                </a>
              </div>
              <div>
                <a href="http://pages.pennapps.com/policies/conduct/">Code of Conduct</a>
              </div>
              <div className="flex flex-col space-y-2">
                <a href="https://facebook.com/pennapps" target="_blank">
                  <div className="footer-social-media">
                    <FaFacebook />
                    <div className="footer-social-media-text">Facebook</div>
                  </div>
                </a>
                <a href="https://twitter.com/pennapps" target="_blank">
                  <div className="footer-social-media">
                    <FaTwitter />
                    <div className="footer-social-media-text">Twitter</div>
                  </div>
                </a>
                <a href="https://instagram.com/pennapps" target="_blank">
                  <div className="footer-social-media">
                    <FaInstagram />
                    <div className="footer-social-media-text">Instagram</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex flex-col space-y-0 min-w-[175px]">
              <p className="footer-penn-logo-text">Organized with support from:</p>
              <img src={penn_logo_white} alt="penn_logo_blue" className="footer-penn-logo" />
            </div>
          </div>
        </div>
        <img src={footer} alt="footer" className="footer-img" />
      </div>

      <div className="footer-mobile" hidden>
        <div className="footer-content">
          <div className="footer-content-layout">
            <div className="flex flex-col space-y-0">
              <h1>PENN<br/>&nbsp;APPS</h1>
              <p>&copy; 2023 PennApps</p>
              <a href="mailto: contact@pennapps.com">
                <p>contact@pennapps.com</p>
              </a>
            </div>
            <div className="flex flex-col space-y-2">
              <a href="http://pages.pennapps.com/policies/conduct/">Code of Conduct</a>
              <div className="footer-social-media-mobile">
                <a href="https://facebook.com/pennapps" target="_blank"><FaFacebook size={22} /></a>
                <a href="https://twitter.com/pennapps" target="_blank"><FaTwitter size={22} /></a>
                <a href="https://instagram.com/pennapps" target="_blank"><FaInstagram size={22} /></a>
              </div>
            </div>
            <div className="flex flex-col space-y-0">
              <p className="footer-penn-logo-text">Organized with <br/> support from:</p>
              <img src={penn_logo_white} alt="penn_logo_blue" className="footer-penn-logo" />
            </div>
          </div>
        </div>
        <img src={footer} alt="footer" className="footer-img" />
        <img src={footer_mobile} alt="footer-mobile" className="footer-img-mobile" />
      </div>
    </div>
  )
}

export default Footer
