import { ContainerProps } from '@/src/types/containerProp';

const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={`max-w-[1320px] mx-auto w-full ${className}`}>
      {children}
    </div>
  );
};

export default Container;
