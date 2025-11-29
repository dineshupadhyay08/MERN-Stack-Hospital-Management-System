import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Department from "../components/Department";
import MessageForm from "../components/MessageForm";

const Home = () => {
  console.log("Home component rendered");

  return (
    <>
      <Hero
        title={
          "Welcome to PBM Care medical institute | Your Trusted Healtcare Provider "
        }
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"/about.png"} />
      <Department />
      <MessageForm />
    </>
  );
};

export default Home;
