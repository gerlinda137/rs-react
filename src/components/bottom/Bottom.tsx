import Loader from '../../loader/Loader';
import { CardsData } from '../card/Card';
import CardsList from '../cards-list/CardsList';

import './Bottom.scss';

interface BottomProps {
  cardsData: CardsData[];
  isLoading: boolean;
}

const Bottom: React.FC<BottomProps> = ({ cardsData, isLoading }) => {
  return (
    <section className="bottom">
      <CardsList cardsData={cardsData} />
      <Loader isLoading={isLoading} />
    </section>
  );
};

export default Bottom;
