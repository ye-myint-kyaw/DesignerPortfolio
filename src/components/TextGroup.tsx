import Link from 'next/link';
import React from 'react'

interface TextGroupProps {
  context: string;
  author: string;
  asLink?: boolean;
  slug?: string;
  className?: string;
}

const TextGroup: React.FC<TextGroupProps> = ({context, author, asLink, slug, className}) => {
  return (
    <div className={`flex flex-col justify-center w-fit mx-auto text-[14px] font-semibold text-[#555555] ${className}`}>
      <p className=" mb-2 whitespace-pre">“{context}”</p>
      {asLink && slug ? <Link href={slug}>{author}</Link>:<p>-{author}</p>}
    </div>
  )
}

export default TextGroup