import { useState, useRef, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import './Carousel.css';

const Carousel = ({ children, title }) => {
  const [offset, setOffset] = useState(0);
  const carouselRef = useRef(null);

  const changeOffset = useCallback(
    (newOffset) => {
      const carouselNode = carouselRef.current;
      const offsetWidth = carouselNode.offsetWidth;
      const scrollWidth = carouselNode.scrollWidth;

      setOffset((currentOffset) => {
        const proposedOffset = Math.max(Math.min(currentOffset + newOffset, 0), -(scrollWidth - offsetWidth));

        return proposedOffset;
      });
    },
    [offset]
  );

  return (
    <div className="container px-12 mx-auto md:mx-0">
      <div className="section-top">
        <h2 className="section-title">{title}</h2>
        <div className="flex">
          <ChevronIcon
            direction={'left'}
            onClick={() => changeOffset(carouselRef.current.offsetWidth)}
          />
          <ChevronIcon
            direction={'right'}
            onClick={() => changeOffset(-carouselRef.current.offsetWidth)}
          />
        </div>
      </div>
      <div className="carousel-container">
        <div
          className="transition-transform	duration-700"
          ref={carouselRef}
          style={{ transform: `translateX(${offset}px)` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

const ChevronIcon = ({ direction, onClick }) => {
  const iconClass = 'icon-main';
  const icon = direction === 'right' ? <ChevronRightIcon className={iconClass} /> : <ChevronLeftIcon className={iconClass} />;

  return <div onClick={onClick}>{icon}</div>;
};

export default Carousel;
