import React from 'react'
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner, Navbar, Galery, Moment } from '../components';

const Home = ({ products, bannerData, galeryData, momentData, setupData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <Galery galery={galeryData} />
    <Moment moment={momentData} />

    <div className="products-heading">
      <h2>{setupData[0].custom_section_1}</h2>
      <h6>{setupData[0].custom_section_2}</h6>
    </div>

    <div className="products-container">
      {(setupData[0].custom_section_type === 1 && 
        products?.map((product) => 
        product.publish ? <Product key={product._id} product={product} /> : null )
        || (custom_section_type === 2 && 
          products?.map((product) => 
          product.bestseller ? <Product key={product._id} product={product} /> : null )
        ))}

    </div>

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

  const setupQuery = '*[_type == "setup"]';
  const setupData = await client.fetch(setupQuery);

  return {
    props: { products, bannerData, galeryData, momentData, setupData}
  }
}

export default Home