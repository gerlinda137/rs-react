import { ShowsData } from '../../interfaces/interfaces';
import Card from '../card/Card';
import './CardsList.scss';

interface CardsListProps {
  cardsData: ShowsData[];
}

const CardsList: React.FC<CardsListProps> = ({ cardsData }) => {
  return (
    <div className="cards">
      {cardsData.map(({ imdbID, Title, Year, Type, Poster }: ShowsData) => (
        <Card
          key={imdbID}
          Title={Title}
          Year={Year}
          Type={Type}
          Poster={Poster}
          imdbID={imdbID}
        />
      ))}
    </div>
  );
};

export default CardsList;
