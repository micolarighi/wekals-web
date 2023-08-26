import React from 'react'
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner, Navbar, Galery, Moment, EmptyItem } from '../components';
import { toast } from 'react-hot-toast';


function emailOnClick () {
  navigator.clipboard.writeText('wekals.wks@gmail.com')
  toast.success('Email berhasil di copy')
}
const Bantuan = ({ products, bannerData, galeryData, momentData }) => (
  <div>
    <div className="products-heading">
      <h2>Bantuan</h2>
      <h6>Hubungi kami jika ada kesulitan</h6>
    </div>
      <div className="text-center">
        <div className=''>
          <button className='btn bg-secondary fs-3' onClick={emailOnClick}>Kontak Via Email</button>
        </div>
        <div className='my-2'>
          <a target={"_blank"} className='bg-secondary btn text-white fs-3' href='https://wa.me/6281389293521'>Chat Via Whatsapp</a>
        </div>
        <div className=''>
          <a target={"_blank"} className='bg-secondary btn text-white fs-3' href='https://www.tokopedia.com/wekals'>Pemesanan Online</a>
        </div>
    </div>
  </div>
);


export default Bantuan