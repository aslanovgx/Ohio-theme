import React from "react";
import Awards from "./Awards/Awards";
import Cards from "./Cards/Cards";
import Collab from "./Collab/Collab";
import Creative from "./Creative/Creative";
import Design from "./Design/Design";
import Fixed from "./Fixed/Fixed";
import Services from "./Services/Services";
import Stickers from "./Stickers/Stickers";
import Work from "./Work/Work";

const Home = () => {
  return (
    <main>
      <Fixed />
      <Design />
      <Services />
      <Stickers />
      <Creative />
      <Work />
      <Cards />
      <Awards />
      <Collab />
    </main>
  );
};

export default Home;
