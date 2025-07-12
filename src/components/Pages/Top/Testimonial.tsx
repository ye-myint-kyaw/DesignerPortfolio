import BasicLayout from "@/components/Layout/BasicLayout";
import TextGroup from "@/components/TextGroup";
import { TestimonialList } from "@/constants";
import React from "react";

const Testimonial = () => {
  return (
    <BasicLayout isGrid className="gap-y-[40px]">
      {TestimonialList.map((testimonial) => (
        <TextGroup 
          author={testimonial.author} 
          context={testimonial.content} 
          key={testimonial.id}
          className="col-start-1 md:odd:col-start-3 even:ml-auto! even:text-right md:even:ml-0! md:even:col-start-5 -col-end-1 !m-[unset]"
        />
      ))}
    </BasicLayout>
  );
};

export default Testimonial;
