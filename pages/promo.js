import React from 'react'
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner, Navbar, Galery, Moment } from '../components';

const Home = ({ products, bannerData, galeryData, momentData }) => (
  <div>

    <div className="products-heading">
      <h2>Promo</h2>
      <h6>Koleksi dengan promo menarik</h6>
    </div>

    <div className="products-container">
      {products?.map((product) => product.promo ? <Product key={product._id} product={product} /> : null)}
    </div>

    {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const galeryQuery = '*[_type == "galery"]';
  const galeryData = await client.fetch(galeryQuery);

  const momentQuery = '*[_type == "moment"]';
  const momentData = await client.fetch(momentQuery);

  return {
    props: { products, bannerData, galeryData, momentData}
  }
}

export default Home