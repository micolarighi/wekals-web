import React from 'react'
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner, Navbar, Galery, Moment, EmptyItem } from '../components';

const Home = ({ products, bannerData, galeryData, momentData }) => (
  <div>
    <div className="products-heading">
      <h2>Shop</h2>
      <h6>Kumpulan Koleksi Terbaik Kami</h6>
    </div>

    <div className="products-container">
      {products.length > 0 ? products?.map((product) => !product.publish ? <Product key={product._id} product={product} /> : null) : <EmptyItem/>}
    </div>

    {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products}
  }
}

export default Home