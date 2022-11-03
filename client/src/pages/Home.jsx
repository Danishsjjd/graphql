import React from "react";
import useClient from "../hooks/useClient";

const Home = () => {
  const { data, isLoading } = useClient();

  if (isLoading) return console.log("loading");

  console.log("data", data);

  return <div>Home</div>;
};

export default Home;
