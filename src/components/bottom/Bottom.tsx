import { ShowsData } from '../../interfaces/interfaces';
import Loader from '../../loader/Loader';

import CardsList from '../cards-list/CardsList';
import Pagination from '../pagination/Pagination';

import './Bottom.scss';

interface BottomProps {
  cardsData: ShowsData[];
  isLoading: boolean;
}

const Bottom: React.FC<BottomProps> = ({ cardsData, isLoading }) => {
  return (
    <section className="bottom">
      <CardsList cardsData={cardsData} />
      <Loader isLoading={isLoading} />
      <Pagination />
    </section>
  );
};

export default Bottom;
