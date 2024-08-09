import Link from "next/link";

export default function Header({theme = "dark"}:{theme?:"dark"|"light"}){
  return <header className={`header ${theme}`}>
    <button className="header__humburger">
      <span></span>
      <span></span>
    </button> 
    <Link href={"/about"} className="header__about">About me</Link>
    <Link href={"/about"} className="header__contact">Contact<br/>here</Link>
    <button className="header__next"><span>Get to<br/>Know Me</span></button>
  </header>
}