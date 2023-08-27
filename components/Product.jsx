import React from 'react';
import Link from 'next/link';
import {FaLock} from 'react-icons/fa'

import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price, publish } }) => {
  return (
    <div>
      {publish ? 
        <div className="product-card">
          <img 
            src={urlFor(image && image[0])}
            width={330}
            height={200}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price"> {<FaLock/>}</p>
        </div> : 
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img 
            src={urlFor(image && image[0])}
            width={330}
            height={200}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price"> {`Rp. ${price}` }</p>
        </div>
      </Link> }
    </div>
  )
}

export default Product