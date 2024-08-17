"use client"
import React, { forwardRef, useImperativeHandle, PropsWithChildren } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

type CarouselProps = PropsWithChildren<{
  options?: any;
  onScrollPrev?: () => void;
  onScrollNext?: () => void;
}>;

const MyCarousel = forwardRef<any, CarouselProps>(({ children, options, onScrollPrev, onScrollNext }, ref) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  useImperativeHandle(ref, () => ({
    scrollPrev: () => emblaApi?.scrollPrev(),
    scrollNext: () => emblaApi?.scrollNext(),
  }), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden relative" ref={emblaRef}>
        <div className="flex -mx-[15px]">
          {React.Children.map(children, (child) => (
            <div className="flex-shrink-0 w-full lg:w-[calc(100%/3)] box-border px-[15px]">
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default MyCarousel;