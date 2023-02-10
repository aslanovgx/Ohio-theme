import React from "react";
import Awards from "./Awards/Awards";
import Collab from "./Collab/Collab";
import Creative from "./Creative/Creative";
import Design from "./Design/Design";
import Services from "./Services/Services";
import Stickers from "./Stickers/Stickers";
import Work from "./Work/Work";

const Home = () => {
  return (
    <main>
      <Design />
      <Services />
      <Stickers />
      <Creative />
      <Work />
      <Awards />
      <Collab />
    </main>
  );
};

export default Home;
