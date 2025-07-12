import Link from "next/link";
import BasicLayout from "../Layout/BasicLayout";

const Footer = () => {
  return (
    <footer className="pb-12">
      <BasicLayout className="items-end flex justify-between gap-[20px]">
        <p className="col-span-2 text-[14px] font-semibold">Website designed by <span className="">PHONE LYNN THANT</span></p>
        <div className="col-span-2">
          <p className="mb-[16px] text-[14px] font-semibold uppercase">CONTACT</p>
          <ul className="grid grid-rows-3 grid-cols-2 gap-x-[3vw] text-blue font-semibold">
            <li><Link href={"https://www.linkedin.com/in/phone-linn-thant-8b4777338/"} target="_blank">Linkdin</Link></li>
            <li><Link href={"DUMMY"} target="_blank">Facebook</Link></li>
            <li><Link href={"DUMMY"} target="_blank">Behance</Link></li>
            <li><Link href={"DUMMY"} target="_blank">Line</Link></li>
            <li><Link href={"DUMMY"} target="_blank">Instagram</Link></li>
            <li><Link href={"DUMMY"} target="_blank">Whatsapp</Link></li>
          </ul>
        </div>
        <p className="col-span-2 text-[14px] font-semibold">Copyrights©. All rights reserved.</p>
        <p className="col-span-2 text-[14px] font-semibold">Website developed by <Link href={"http://yemyintkyaw.vercel.app/"} target="_blank" className="whitespace-nowrap text-blue">Ye Myint Kyaw</Link></p>
      </BasicLayout>

      <BasicLayout asChild className="!mb-0">
        <div className="fixed bottom-0 left-0 right-0 w-full py-4 flex justify-between items-center gap-5 bg-secondary">
          <p className="heading01">YOUR EXTRAORDINARY DESINGER WHO CAN FEEL YOUR BRAND’S EMOTIONS.</p>
          {/* scroll indigator */}
          <div className="w-[24px] h-[40px] rounded-full bg-secondary border-[2px] border-primary relative">
            <span className="w-[8px] h-auto aspect-square rounded-full absolute top-[8px] left-1/2 -translate-x-1/2 animate-footer bg-primary"></span>
          </div>
        </div>
      </BasicLayout>
    </footer>
  );
};

export default Footer;
