import clsx from 'clsx';
import './Tabs.css';

const Tabs = ({ value, onChangeTab, tabs }) => {
  return (
    <div className="container-wrapper md:mx-0">
      <div className="flex">
        <ul className="tabs__list">
          {tabs.map(({ id, label }) => {
            const classes = clsx({
              tabs__item: true,
              'tabs__item--active': value === id,
            });

            return (
              <li
                key={id}
                className={classes}
              >
                <a
                  className="tabs__link"
                  onClick={() => onChangeTab(id)}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Tabs;
