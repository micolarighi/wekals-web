import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='heroBanner-image'>
      <img src={urlFor(heroBanner.image)} class="w-100" alt="..."/>
    </div>
    

  )
}

export default HeroBanner