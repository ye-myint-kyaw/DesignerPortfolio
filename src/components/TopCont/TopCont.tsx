type Props = {
  subText:string,
  mainText:string,
  theme?: "dark"|"light"
}

const TopCont:React.FC<Props> = ({theme="dark", mainText, subText})=>{
  return <div className={`topKvMain ${theme}`}>
    <div className="topKvMain__inner">
      <p className="topKvMain__greating">Hello, I am </p>
      <p className="topKvMain__main" dangerouslySetInnerHTML={{
        __html: mainText
      }}/>
      <p className="topKvMain__sub">{subText}</p>
    </div>
  </div>
}

export default TopCont;