import React from 'react';
import './DefaultTemplate.scss';

/* 타입 수정 */
interface DefaultTemplateType {
  header?: any
  children: React.ReactNode | React.ReactNode[]
}

export const DefaultTemplate = ({header, children}: DefaultTemplateType) => (
  <div className='DefaultTemplate'>
    {header}
    <section className='DefaultContents'>
      {children}
    </section>
  </div>
)
