import React from "react";
import Creative from "./Creative/Creative";
import Design from "./Design/Design";
import Services from "./Services/Services";
import Stickers from "./Stickers/Stickers";

const Home = () => {
  return (
    <main>
      <Design />
      <Services />
      <Stickers />
      <Creative />
    </main>
  );
};

export default Home;
