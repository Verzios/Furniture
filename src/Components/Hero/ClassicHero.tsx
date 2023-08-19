import React from "react";
import Slider from "react-slick";
import "./Hero.css";
import { Button } from "../ Button";
import SingleHero from "./SingleHero";
type Props = {};

export const ClassicHero = (props: Props) => {
  const settings = {
    customPaging: function (i: any) {
      return (
        <a>
          <button className="h-2 w-2 bg-red-700 "></button>
        </a>
      );
    },
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 100000,
    cssEase: "linear",
    pauseOnHover: true,
  };
  return (
    <Slider {...settings}>
      <div className="h-[40vw] relative">
        <SingleHero
          image="https://www.parkmanwoodworks.com/cdn/shop/files/PW2118_Large_4e161b78-63af-4011-975c-d666269c6c31_2808x.jpg?v=1682421925"
          title="Custom Furniture Handmade"
          subtitle="from urban hardwood, reclaimed wood and iron in Los Angeles"
        />
      </div>

      <div>
        <SingleHero
          image="https://www.parkmanwoodworks.com/cdn/shop/files/final1-8_2808x.jpg?v=1665109714"
          title="Custom Furniture Handmade"
          subtitle="from urban hardwood, reclaimed wood and iron in Los Angeles"
        />
      </div>
      <div>
        <SingleHero
          image="https://www.parkmanwoodworks.com/cdn/shop/files/PW1709_Large_101117d9-3ad5-4c80-9c46-b856321f99ec_2808x.jpg?v=1682395705"
          title="Custom Furniture Handmade"
          subtitle="from urban hardwood, reclaimed wood and iron in Los Angeles"
        />
      </div>
      <div>
        <SingleHero
          image="https://www.parkmanwoodworks.com/cdn/shop/files/1G1B5337_2808x.jpg?v=1668035384"
          title="Custom Furniture Handmade"
          subtitle="from urban hardwood, reclaimed wood and iron in Los Angeles"
        />
      </div>
    </Slider>
  );
};
