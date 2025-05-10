import React, { cloneElement, isValidElement } from 'react'

type BasicLayoutProps = {
  children: React.ReactNode;
  asChild?: boolean;
  isGrid?: boolean;
  className?: string;
}

const BasicLayout: React.FC<BasicLayoutProps> = ({children, asChild=false, isGrid=false, className="", ...props}) => {
  const classes = `max-w-[var(--max-width)] mx-auto mb-[80px] lg:mb-[160px] px-4 sm:px-6 lg:px-[6.4%] ${isGrid ? 'grid grid-cols-4 sm:grid-cols-8 gap-x-[20px] sm:gap-x-[3%]' : ''}`
  if(asChild && isValidElement(children)) {
    const child = children as React.ReactElement<any>;    
    return cloneElement(child, {
      className: `${classes} ${children.props.className} ${className}`,
      ...props
    })
  }else{
    return (
      <div className={`${classes} ${className}`} {...props}>
        {children}
      </div>
    )
  }
}

export default BasicLayout