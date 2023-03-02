import React from "react";
import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";

import { urlFor } from "../lib/client";
import moment from "@/sanity_wekals-web/schemas/moment";

const Moment = ({ moment }) => {
  return (
    <div>
      <h3 className="mb-3 mt-5 section-title">Moment</h3>
      <Carousel interval={2000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={urlFor(moment[0].image)}
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
            src={urlFor(moment[1].image)}
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
            src={urlFor(moment[2].image)}
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

export default Moment;
