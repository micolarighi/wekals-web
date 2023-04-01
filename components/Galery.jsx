import React from "react";
import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";

import { urlFor } from "../lib/client";
import galery from "@/sanity_wekals-web/schemas/galery";

const Galery = ({ galery }) => {
  return (
    <div>
      <h3 className="mb-3 mt-5 section-title">Galery</h3>
      <Carousel interval={2000}>
      {galery.map((item) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={urlFor(item.image)}
              alt="First slide"
            />
            <Carousel.Caption className='carousel-caption'>
              <h3>{item.judul}</h3>
              <p>{item.desc}</p>
            </Carousel.Caption>
          </Carousel.Item>
      ))}
      </Carousel>
    </div>
  );
};

export default Galery;
