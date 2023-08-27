import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook} from 'react-icons/ai';
import { FaTiktok,FaEnvelope, FaPhone } from 'react-icons/fa';
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="footer-container">
      <h1>Wekals 2023</h1>
      <div className="inner-footer mt-4">
      <hr />
        <div className='icons mx-3'>
          <h4>Ikuti Kami</h4>
          <Link href={''}> 
            <AiFillInstagram  className='mx-1 fs-3'/>
          </Link>
          <Link href={''}>
            <AiOutlineTwitter  className='mx-1 fs-3'/>
          </Link>
          <Link href={''}>
            <AiFillFacebook  className='mx-1 fs-3'/>
          </Link>
          <Link href={''}>
            <FaTiktok className='mx-1 fs-3'/>
          </Link>
        </div>
        <div className='icons mx-3'>
          <h4>Kontak Kami</h4>
          <div className='d-flex flex-column'>
            <div>
              <span className='fs-6'>wekals.wks@gmail.com</span>
            </div>
            <div style={{marginTop:-20}}>
              <FaPhone className='mr-1 ms-3 fs-6'/> <span className='fs-6'>081389293521</span> 
            </div>
          </div>
        </div>
      </div>
      </div>

  )
}

export default Footer