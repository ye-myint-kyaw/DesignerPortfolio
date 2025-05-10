import BasicLayout from "@/components/Layout/BasicLayout";
import Categories from "@/components/Pages/Top/Categories";
import Category from "@/components/Pages/Top/CategorySection";
import Contact from "@/components/Pages/Top/Contact";
import Kv from "@/components/Pages/Top/Kv";
import Poster from "@/components/Pages/Top/Poster";
import Testimonial from "@/components/Pages/Top/Testimonial";
import Table from "@/components/Table";
import TextGroup from "@/components/TextGroup";
import { TopCategories, TopIntroTable, TopPosters } from "@/constants";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="top">
      <Kv />

      <Categories/>

      <TextGroup
        context={`Good design is obvious.
        Great deign is transparent.`}
        author="Joe Sparano"
        className="min-h-screen"
      />

      <Poster/>

      <Table subTitle="HELLO AGAIN I’M" title="Phone Lynn Thant (Leo)" tableCells={TopIntroTable}/>

      <Testimonial/>

      <Contact/>

      {/* <div style={{ height: 5000 }}></div> */}
    </div>
  );
};

export default page;
