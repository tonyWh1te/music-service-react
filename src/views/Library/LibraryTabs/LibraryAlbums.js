import AlbumCard from '../../../components/AlbumCard/AlbumCard';

const LibraryAlbums = ({ albums }) => {
  return (
    <div className="pb-14">
      <div className="container-wrapper md:mx-0">
        <div className="section-top mb-5">
          <h2 className="section-title">My albums</h2>
        </div>
        <ul className="album-list">
          {albums.map(({ id, ...album }) => (
            <AlbumCard
              key={id}
              albumInfo={{
                id,
                ...album,
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LibraryAlbums;
