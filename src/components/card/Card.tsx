import './Card.scss';

export interface CardProps {
  Poster: string;
  Title: string;
  Year: string;
  Type: string;
}

export interface CardsData {
  Poster: string;
  Title: string;
  Year: string;
  Type: string;
  imdbID: string;
}

const Card: React.FC<CardProps> = ({
  Poster,
  Title,
  Year,
  Type,
}: CardProps) => {
  return (
    <article className={`card`}>
      <button className="card__button">
        <img src={Poster} alt="Show poster" className="card__image" />
        <div className="card__content">
          <h2 className="card__title">{Title}</h2>
          <span className="card__year">{Year}</span>
          <span className="card__type">{Type}</span>
        </div>
      </button>
    </article>
  );
};

export default Card;
