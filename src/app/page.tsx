import BasicLayout from "@/components/Layout/BasicLayout";
import Categories from "@/components/Pages/Top/Categories";
import Category from "@/components/Pages/Top/CategorySection";
import Contact from "@/components/Pages/Top/Contact";
import Kv from "@/components/Pages/Top/Kv";
import Poster from "@/components/Pages/Top/Poster";
import Testimonial from "@/components/Pages/Top/Testimonial";
import Table from "@/components/Table";
import TextGroup from "@/components/TextGroup";
import { TopIntroTable } from "@/constants";
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
        className="my-[120px] min-h-[40vh] md:my-0 md:min-h-screen w-full text-center"
      />

      <Poster/>

      <Table subTitle="HELLO AGAIN I’M" title="Phone Lynn Thant (Leo)" tableCells={TopIntroTable}/>

      <Testimonial/>

      <Contact/>
    </div>
  );
};

export default page;
