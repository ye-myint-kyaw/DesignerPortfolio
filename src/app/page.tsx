import BasicLayout from "@/components/Layout/BasicLayout";
import Category from "@/components/Pages/Top/CategorySection";
import Kv from "@/components/Pages/Top/Kv";
import Table from "@/components/Table";
import TextGroup from "@/components/TextGroup";
import { TopCategories, TopIntroTable, TopPosters } from "@/constants";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="top">
      <Kv />

      {TopCategories.map((category, index) => <Category
        img01={category.img01}
        img02={category.img02}
        title={category.title}
        description={category.description}
        slug={category.slug}
        key={category.slug}
        isReversed={(index + 1) % 2 === 0}
      />)}

      <TextGroup
        context={`Good design is obvious.
        Great deign is transparent.`}
        author="Joe Sparano"
        className="min-h-screen"
      />

      <BasicLayout isGrid className=" mb-[80px] lg:mb-[200px]">
        {TopPosters.map((_, index) => {
          // Rotate array
          const rotatedPosters = [
            ...TopPosters.slice(index),
            ...TopPosters.slice(0, index)
          ]

          return (
            <figure
              key={index}
              className={`${(index + 1) % 2 === 0 ? 'translate-y-0 md:translate-y-[52px]' : ''} flex col-span-2 overflow-hidden topPoster`}
            >
              {rotatedPosters.map((poster) => (
                <Image
                  key={poster}
                  width={296}
                  height={404}
                  alt="Poster"
                  src={poster}
                  className="rounded-[15px] min-w-full"
                />
              ))}
            </figure>
          )
        })}

      </BasicLayout>

      <Table subTitle="HELLO AGAIN I’M" title="Phone Lynn Thant (Leo)" tableCells={TopIntroTable}/>

      <div style={{ height: 5000 }}></div>
    </div>
  );
};

export default page;
