import React, { useState, useEffect, useCallback } from "react";
import { useEmblaCarousel } from 'embla-carousel/react'
import Image from '@/components/image'


const NextButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--next transition-opacity ease-in-out duration-500 group"
    onClick={onClick}
    data-scroll data-scroll-speed={1.2}
    disabled={!enabled}
  >
    <div className="button__inner -rotate-6 group-hover:rotate-0 group-hover:scale-105 transition ease-in-out duration-500">
      <svg className="w-full spin--fast fill-yellow-dark" viewBox="0 0 189 190" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M75.416 3.35a29.5 29.5 0 0 1 16.53-1.744l36.16 6.596a29.5 29.5 0 0 1 14.85 7.47L169.81 40.77a29.504 29.504 0 0 1 8.454 14.312l9.021 35.632a29.504 29.504 0 0 1-.625 16.611l-11.676 34.853a29.5 29.5 0 0 1-9.506 13.635l-28.665 23.009a29.5 29.5 0 0 1-15.369 6.331l-36.554 3.859a29.507 29.507 0 0 1-16.352-2.983L35.7 169.512a29.5 29.5 0 0 1-12.144-11.35L4.862 126.514a29.497 29.497 0 0 1-4.08-16.113L2.167 73.67a29.5 29.5 0 0 1 5.28-15.762l21.021-30.152A29.5 29.5 0 0 1 41.43 17.351l33.986-14Z" stroke="#DEE212" strokeWidth={2}/></svg>
      <span className="absolute inset-0 w-full h-full flex items-center justify-center uppercase text-xs md:text-base xl:text-xl">Explore</span>
    </div>
  </button>
);

const Carousel = ({ items }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    slidesToScroll: 1,
    skipSnaps: false,
    align: 'center',
    loop: true,
    speed: 4,
    inViewThreshold: 0.8,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="embla relative">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {items.map((e, index) => (
            <div className="embla__slide" key={index}>
              <div data-scroll data-scroll-direction="horizontal" data-scroll-speed="0.75">
                <div className="embla__slide__inner">
                  <Image
                    image={e}
                    widthOverride={1200}
                    alt="Something"
                    layout="fill"
                    className="embla__slide__img"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default Carousel;
