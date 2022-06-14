import * as React from "react";
import './Wrapper.scss';

type Props = {
  children?: React.ReactNode;
};

export const Wrapper = React.forwardRef<HTMLDivElement, Props>(
  ({ ...props }, ref) => {
    return <div className='Wrapper' ref={ref} {...props} />;
  }
);
