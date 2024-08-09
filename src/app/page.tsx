import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";

export default function Top(){
  return <div className="top">
    <main className="top__inner">
      <div className="topKv">
        <div className="topKv__up">
          <Header/>
        </div>
        <div className="topKv__under">
      
        </div>
      </div>
    </main>
    <Footer/>

  </div>
}