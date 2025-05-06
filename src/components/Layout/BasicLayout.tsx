import React, { cloneElement, isValidElement } from 'react'

type BasicLayoutProps = {
  children: React.ReactNode;
  asChild?: boolean;
  isGrid?: boolean;
}

const   BasicLayout: React.FC<BasicLayoutProps> = ({children, asChild=false, isGrid=false}) => {
  const classes = `max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-24 ${isGrid ? 'grid grid-cols-4 sm:grid-cols-8 gap-[20px] sm:gap-[40px]' : ''}`
  if(asChild && isValidElement(children)) {
    const child = children as React.ReactElement<any>;    
    return cloneElement(child, {
      className: `${classes} ${children.props.className}`
    })
  }else{
    return (
      <div className={`${classes}`}>
        {children}
      </div>
    )
  }
}

export default BasicLayout