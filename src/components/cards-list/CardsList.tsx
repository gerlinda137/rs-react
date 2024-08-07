import Card, { CardsData } from '../card/Card';
import './CardsList.scss';

interface CardsListProps {
  cardsData: CardsData[];
}

const CardsList: React.FC<CardsListProps> = ({ cardsData }) => {
  return (
    <div className="cards">
      {cardsData.map(({ imdbID, Title, Year, Type, Poster }: CardsData) => (
        <Card
          key={imdbID}
          Title={Title}
          Year={Year}
          Type={Type}
          Poster={Poster}
        />
      ))}
    </div>
  );
};

export default CardsList;
