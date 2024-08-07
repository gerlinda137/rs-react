import { CardsData } from '../card/Card';
import CardsList from '../cards-list/CardsList';

import './Bottom.scss';

interface BottomProps {
  cardsData: CardsData[];
}

const Bottom: React.FC<BottomProps> = ({ cardsData }) => {
  return (
    <section className="bottom">
      <CardsList cardsData={cardsData} />
    </section>
  );
};

export default Bottom;
