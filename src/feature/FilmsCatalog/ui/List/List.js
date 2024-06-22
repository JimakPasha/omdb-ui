import { Card } from '../Card';
import './List.css';

export const List = ({ list }) => {
  return (
    <ul className="list">
      {list.map((movie) => (
        <Card key={movie.imdbID} {...movie} />
      ))}
    </ul>
  );
};