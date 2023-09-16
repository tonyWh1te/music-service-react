import './Tabs.css';

const Tabs = ({ value, onChangeTab, tabs }) => {
  return (
    <div className="container-wrapper md:mx-0">
      <div className="flex">
        <ul className="tabs__list">
          {tabs.map(({ id, label }) => (
            <li
              key={id}
              className={`tabs__item ${value === id ? 'tabs__item--active' : ''}`}
            >
              <a
                className="tabs__link"
                onClick={() => onChangeTab(id)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tabs;
