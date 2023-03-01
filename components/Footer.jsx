import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className='me-5'>
          <h3>Wekals 2023</h3>
          <ul>
            <li><a href="">About Wekals</a></li>
            <li><a href="">Portofolio</a></li>
          </ul>
      </div>
      <div>
      <h3>Ikuti Kami</h3>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
      </div>
    </div>
  )
}

export default Footer