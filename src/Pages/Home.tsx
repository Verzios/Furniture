import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import { CardColor } from "../Components/Cards/CardColor";
import { Categories, PopularGoods, Template } from "../Components/Templates";
import { ClassicHero } from "../Components/Hero";
import { OnSale } from "../Components/Cards";

type Props = {};

const Home = (props: Props) => {
  return (
    <Template>
      <ClassicHero />
      <PopularGoods />

      <div className="flex flex-row gap-12">
        <OnSale />
        <OnSale />
      </div>
      
    </Template>
  );
};

export default Home;
