import { Card } from '../Card';
import './List.css';

export const List = ({ list }) => {
  return (
    <div className="list">
      {list.map((movie) => (
        <Card key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
};