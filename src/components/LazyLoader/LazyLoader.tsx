import { FC, ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { Skeleton } from '../Skeleton/Skeleton';

interface LazyLoadProps {
  children: ReactNode;
  threshold?: number;
  triggerOnce?: boolean;
  skeletonHeight?: number;
}

const LazyLoad: FC<LazyLoadProps> = ({
  children,
  threshold = 0.1,
  triggerOnce = false,
  skeletonHeight = 400,
}) => {
  const { ref, inView } = useInView({ triggerOnce, threshold });

  return (
    <div ref={ref}>
      {inView ? children : <Skeleton height={skeletonHeight} />}
    </div>
  );
};

export default LazyLoad;
