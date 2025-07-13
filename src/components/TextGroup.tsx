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
      {asLink && slug ? <Link href={slug} className='text-blue after:content-[""] after:-w-[20px] after:h-[20px] after:inline-block after:bg-[url("/img/icons/icon_link.svg") after:bg-no-repeat]'>{author}</Link>:<p>-{author}</p>}
    </div>
  )
}

export default TextGroup