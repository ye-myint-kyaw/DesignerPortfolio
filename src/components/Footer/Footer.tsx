import Link from "next/link";
import BasicLayout from "../Layout/BasicLayout";

const Footer = () => {
  return (
    <footer className="pb-12">
      <BasicLayout className="md:items-end flex flex-col md:flex-row md:justify-between gap-[20px] mb-[40px]! lg:mb-[160px]!">
        <p className="col-span-2 text-[14px] font-semibold order-2 md:order-1">Website designed by <span className="">PHONE LYNN THANT</span></p>
        <div className="col-span-2 order-1 md:order-2">
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
        <p className="col-span-2 text-[14px] font-semibold order-4 md:order-3">Copyrights©. All rights reserved.</p>
        <p className="col-span-2 text-[14px] font-semibold order-3 md:order-4">Website developed by <Link href={"http://yemyintkyaw.vercel.app/"} target="_blank" className="whitespace-nowrap text-blue">Ye Myint Kyaw</Link></p>
      </BasicLayout>
    </footer>
  );
};

export default Footer;
