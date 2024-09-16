import Cardlist from "@/Components/Cardlist";
import Categorylist from "@/Components/Categorylist";
import Featured from "@/Components/Featured";
import Menu from "@/Components/Menu";
import React from "react";

const Home = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  return (
    <div>
      <Featured />
      <Categorylist />
      <div className="flex flex-col md:flex-row gap-4 xl:gap-12 my-8">
        <Cardlist page={page}/>
        <Menu />
      </div>
    </div>
  );
};

export default Home;
