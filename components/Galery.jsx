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
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={urlFor(galery[0].image)}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Judul Disini</h3>
            <p>Deskripsi Disini.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={urlFor(galery[1].image)}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Judul Disini</h3>
            <p>Deskripsi Disini.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={urlFor(galery[2].image)}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Judul Disini</h3>
            <p>Deskripsi Disini.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Galery;
