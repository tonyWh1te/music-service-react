import Layout from '../../../components/Layout/Layout';
import { coverPic1, coverPic2, coverPic3, artistPic } from '../../../assets';
import './HomePage.css';

function HomePage() {
  return (
    <Layout>
      <div className="container px-12 mx-auto md:mx-0">
        <h1 className="page-title">Home</h1>
      </div>
      <section className="pb-14">
        <div className="container px-12 mx-auto md:mx-0">
          <h2 className="section-title">Popular songs</h2>
          <ul className="songs-list">
            <li className="card-song">
              <img
                className="card-song__cover"
                src={coverPic1}
                alt="cover"
              />
              <h4 className="card-title">LukeXXy</h4>
              <p className="card-song__singer">The Vegabonds</p>
            </li>
            <li className="card-song">
              <img
                className="card-song__cover"
                src={coverPic2}
                alt="cover"
              />
              <h4 className="card-title">Cameron Williamson</h4>
              <p className="card-song__singer">The Vegabonds</p>
            </li>
            <li className="card-song">
              <img
                className="card-song__cover"
                src={coverPic3}
                alt="cover"
              />
              <h4 className="card-title">RonaldRich</h4>
              <p className="card-song__singer">The Vegabonds</p>
            </li>
            <li className="card-song">
              <img
                className="card-song__cover"
                src={coverPic2}
                alt="cover"
              />
              <h4 className="card-title">CameronW</h4>
              <p className="card-song__singer">The Vegabonds</p>
            </li>
            <li className="card-song">
              <img
                className="card-song__cover"
                src={coverPic1}
                alt="cover"
              />
              <h4 className="card-title">JJDevon</h4>
              <p className="card-song__singer">The Vegabonds</p>
            </li>
            <li className="card-song">
              <img
                className="card-song__cover"
                src={coverPic1}
                alt="cover"
              />
              <h4 className="card-title">JJDevon</h4>
              <p className="card-song__singer">The Vegabonds</p>
            </li>
            <li className="card-song">
              <img
                className="card-song__cover"
                src={coverPic2}
                alt="cover"
              />
              <h4 className="card-title">CameronW</h4>
              <p className="card-song__singer">The Vegabonds</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="pb-32 md:pb-14">
        <div className="container px-12 mx-auto md:mx-0">
          <h2 className="section-title">Popular artists</h2>
          <ul className="artists-list">
            <li className="card-artist">
              <img
                className="card-artist__img"
                src={artistPic}
                alt="artist"
              />
              <h4 className="card-title">David Bowie</h4>
            </li>
            <li className="card-artist">
              <img
                className="card-artist__img"
                src={artistPic}
                alt="artist"
              />
              <h4 className="card-title">David Bowie</h4>
            </li>
            <li className="card-artist">
              <img
                className="card-artist__img"
                src={artistPic}
                alt="artist"
              />
              <h4 className="card-title">David Bowie</h4>
            </li>
            <li className="card-artist">
              <img
                className="card-artist__img"
                src={artistPic}
                alt="artist"
              />
              <h4 className="card-title">David Bowie</h4>
            </li>
            <li className="card-artist">
              <img
                className="card-artist__img"
                src={artistPic}
                alt="artist"
              />
              <h4 className="card-title">David Bowie</h4>
            </li>
            <li className="card-artist">
              <img
                className="card-artist__img"
                src={artistPic}
                alt="artist"
              />
              <h4 className="card-title">David Bowie</h4>
            </li>
            <li className="card-artist">
              <img
                className="card-artist__img"
                src={artistPic}
                alt="artist"
              />
              <h4 className="card-title">David Bowie</h4>
            </li>
            <li className="card-artist">
              <img
                className="card-artist__img"
                src={artistPic}
                alt="artist"
              />
              <h4 className="card-title">David Bowie</h4>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export default HomePage;
