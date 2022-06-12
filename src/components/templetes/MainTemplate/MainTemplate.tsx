import React from 'react';
import './MainTemplate.scss';

/* 타입 수정 */
interface MainTemplateType {
  header?: any
  children: React.ReactNode | React.ReactNode[]
}

export const MainTemplate = ({header, children}: MainTemplateType) => {
  return (
    <div className='MainTemplate'>
      {header}
      <section className='MainContents'>
        {children}
      </section>
    </div>
  )
}
