import { ContainerProps } from '@/src/types/containerProp';

const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={`max-w-[1320px] mx-auto w-full px-4 md:px-0 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
