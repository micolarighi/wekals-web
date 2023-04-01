import React from 'react'
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner, Navbar, Galery, Moment, EmptyItem } from '../components';

const Bantuan = ({ products, bannerData, galeryData, momentData }) => (
  <div>
    <div className="products-heading">
      <h2>Bantuan</h2>
      <h6>Hubungi kami jika ada kesulitan</h6>
    </div>
      <div className="text-center">
        <div className=''>
          <a className='btn bg-secondary' href='mailto:wekals.wks@gmail.com'>Kontak Via Email</a>
        </div>
        <div className=''>
          <a target={"_blank"} className='bg-secondary btn text-white' href='https://wa.me/6281389293521'>Chat Via Whatsapp</a>
        </div>
        <div className=''>
          <a target={"_blank"} className='bg-secondary btn text-white' href='https://wa.me/6281389293521'>Pemesanan Online</a>
        </div>
    </div>


  </div>
);


export default Bantuan