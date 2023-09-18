import { createSearchParams, useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import './Carousel.css';

const Carousel = ({ children, title, linkProps = null }) => {
  const navigate = useNavigate();

  const [offset, setOffset] = useState(0);
  const carouselRef = useRef(null);

  const onChangeOffset = (newOffset) => {
    const carouselNode = carouselRef.current;
    const offsetWidth = carouselNode.offsetWidth;
    const scrollWidth = carouselNode.scrollWidth;

    setOffset((currentOffset) => {
      const proposedOffset = Math.max(Math.min(currentOffset + newOffset, 0), -(scrollWidth - offsetWidth));

      return proposedOffset;
    });
  };

  const onLinkClick = ({ path, params }) => {
    navigate({
      pathname: `${path}`,
      search: `?${createSearchParams(params)}`,
    });
  };

  return (
    <div className="container-wrapper md:mx-0">
      <div className="section-top mb-2">
        <h2 className="section-title">{title}</h2>
        <div className="flex items-center">
          <ChevronIcon
            direction={'left'}
            onClick={() => onChangeOffset(carouselRef.current.offsetWidth)}
          />
          {linkProps && (
            <a
              className="section-link animation-main"
              onClick={() => onLinkClick(linkProps)}
            >
              view all
            </a>
          )}
          <ChevronIcon
            direction={'right'}
            onClick={() => onChangeOffset(-carouselRef.current.offsetWidth)}
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
  const icon =
    direction === 'right' ? (
      <ChevronRightIcon className={iconClass} />
    ) : (
      <ChevronLeftIcon className={iconClass} />
    );

  return <div onClick={onClick}>{icon}</div>;
};

export default Carousel;
