"use client"

import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import TopCont from "@/components/TopCont/TopCont";
import { useEffect, useRef } from "react";

export default function Top(){
  const mousePosition = useRef({x:0, y:0})
  const element = useRef<HTMLDivElement | null>(null);
  
  useEffect(()=>{
    const moveMouse = (e:MouseEvent) =>{
      mousePosition.current = { x: e.clientX, y: e.clientY };
      console.log(mousePosition);
      
      if (element.current) {
        console.log(element.current.style.maskPosition);
        element.current.style.maskPosition = `${e.clientX-75}px ${e.clientY-75}px`;
        element.current.style.backgroundColor = "white"
      }
    }
    window.addEventListener("mousemove", moveMouse);

    return ()=>{
      window.removeEventListener("mousemove", moveMouse);
    }
  },[])

  return <div className="top">
    <main className="top__inner">
      <div className="topKv">
        <div className="topKv__up">
          <Header/>
          <TopCont mainText="mid-weight,<br>minimalist" subText="Graphic designer"/>
        </div>
        <div ref={element} className="topKv__under" >
          <Header theme="light"/>
          <TopCont theme="light" mainText="mid-weight,<br>minimalist" subText="Graphic designer"/>
          {/* <TopCont theme="light" mainText="lowkey, <br>kind-hearted" subText="Visual artist"/> */}
        </div>
      </div>
    </main>
    {/* <span id="circle"></span> */}
    <Footer/>

  </div>
}