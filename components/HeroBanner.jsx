import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='mt-4'>
      <img src={urlFor(heroBanner.image)} class="w-100 rounded" alt="..."/>
    </div>
    

  )
}

export default HeroBanner