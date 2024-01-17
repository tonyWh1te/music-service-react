import ArtistCard from '../../../components/ArtistCard/ArtistCard';

const LibraryArtists = ({ artists }) => {
  return (
    <div className="pb-14">
      <div className="container-wrapper md:mx-0">
        <div className="section-top mb-5">
          <h2 className="section-title">My artists</h2>
        </div>
        <ul className="artists-table">
          {artists.map((artist) => (
            <ArtistCard
              key={artist.id}
              artistInfo={{ ...artist }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LibraryArtists;
