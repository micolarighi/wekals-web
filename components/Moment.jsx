import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';
import moment from '@/sanity_wekals-web/schemas/moment';

const Moment = ({moment}) => {
  return (
    <div className='mt-5'>
      <h3 className='mb-3 section-title'>Moment</h3>
      <div id="carouselMoment" class="carousel slide">
        <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselMoment" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselMoment" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselMoment" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner rounded">
      <div class="carousel-item active">
        <img src={urlFor(moment[0].image)} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={urlFor(moment[1].image)} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={urlFor(moment[2].image)} class="d-block w-100" alt="..."/>
      </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselMoment" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselMoment" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Moment