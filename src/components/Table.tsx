import { TableRow } from '@/types/global'
import React from 'react'
import BasicLayout from './Layout/BasicLayout';

interface TableProps {
  title?: string;
  subTitle: string;
  tableCells: TableRow[]
}

const Table: React.FC<TableProps> = ({title, subTitle, tableCells}) => {
  return (
    <BasicLayout>
      <hgroup className='mb-[30px]'>
        {subTitle && <p className='text-[14px] uppercase font-semibold'>{subTitle}</p>}
        <h2 className='heading02'>{title}</h2>
      </hgroup>
      <dl>
        {tableCells.map((cell) => (
          <div key={cell.title} className='border-t-[1.25px] py-[30px] border-gray grid grid-cols-8 sm:grid-cols-8 gap-x-[20px] sm:gap-x-[3%]'>
            <dt className='uppercase text-[14px] font-semibold col-start-1 col-end-3 md:col-end-3 mb-5 md:mb-0 '>{cell.title}</dt>
            <dd className='col-start-4 md:col-start-4 -col-end-1'>
              <ul className='flex flex-col md:flex-row justify-between gap-5'>
                {cell.content.map(content => (
                  <li key={content} className='whitespace-pre-line'>
                    {content}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </BasicLayout>
  )
}

export default Table