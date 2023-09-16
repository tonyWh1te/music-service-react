import './LandingFooter.css';

const LandingFooter = ({ social }) => {
  return (
    <footer>
      <div className="container-wrapper">
        <div className="footer__inner">
          <ul className="footer__social">
            {social.map(({ value, img }, i) => (
              <li key={i}>
                <a href="#">
                  <img
                    src={img}
                    alt={value}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
