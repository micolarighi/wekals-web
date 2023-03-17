import React from 'react'
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner, Navbar, Galery, Moment, EmptyItem } from '../components';

const Bantuan = ({ products, bannerData, galeryData, momentData }) => (
  <div>
    <div className="products-heading">
      <h2>Bantuan</h2>
      <div className="list-group">
        <a href="#" className="list-group-item list-group-item-action" aria-current="true">
            Kontak
        </a>
        <a href="#" className="list-group-item list-group-item-action">Chat Langsung</a>
        <a className="list-group-item list-group-item-action">Pemesanan Online</a>
        </div>
    </div>


  </div>
);


export default Bantuan