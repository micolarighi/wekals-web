import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook} from 'react-icons/ai';
import { FaTiktok,FaEnvelope, FaPhone } from 'react-icons/fa';
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="footer-container">
      <h1>Wekals 2023</h1>
      <hr />
        <div className='icons'>
          <h4>Ikuti Kami</h4>
          <Link href={''}> 
            <AiFillInstagram  className='mx-1'/>
          </Link>
          <Link href={''}>
            <AiOutlineTwitter  className='mx-1'/>
          </Link>
          <Link href={''}>
            <AiFillFacebook  className='mx-1'/>
          </Link>
          <Link href={''}>
            <FaTiktok className='mx-1'/>
          </Link>
        </div>
        <div className='icons mt-3'>
          <h4>Kontak Kami</h4>
            <FaEnvelope className='mx-3'/> <span className='fs-5'>email@gmail.com</span>
            <br />
            <FaPhone className='mx-3'/> <span className='fs-5'>08xxxxxxx</span> 
        </div>
      </div>
  )
}

export default Footer