import React from "react";
import { useSelector } from "react-redux";

import LoadingSpinner from "./LoadingSpinner";
import Cards from "./Cards";
import ContainerCards from "./ContainerCards";

const Home = () => {
  const { array, isLoading } = useSelector((store) => store.pokemon);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <ContainerCards>
      {array.map((item, i) => (
        <Cards item={item} i={i} />
      ))}
    </ContainerCards>
  );
};

export default Home;
