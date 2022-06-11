import React from 'react';
import './DefaultTemplate.scss';

/* 타입 수정 */
interface DefaultTemplateType {
  header?: any
  children: React.ReactChild | React.ReactChild[]
}

export const DefaultTemplate: React.FC<DefaultTemplateType> = ({header, children}) => (
  <div className='defaultTemplate'>
    {header}
    <section className='mainArea'>
      {children}
    </section>
  </div>
)
