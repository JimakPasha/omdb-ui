import './Card.css';

export const Card = ({ Poster, Title, Type, Year, imdbID }) => {
  return (
    <div className="card">
      <div className="card__poster">
        <img src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/300x450?text=No+Poster'} alt={Title} />
      </div>
      <div className="card__info">
        <h2 className="card__title">{Title}</h2>
        <p>Year:<span className='card__detail'> {Year}</span></p>
        <p>IMDb ID:<span className='card__detail'> {imdbID}</span></p>
        <p>Type:<span className='card__detail'> {Type}</span></p>
      </div>
    </div>
  );
};
