// import { useEffect } from 'react';
import {
  Link,
  LoaderFunction,
  useLoaderData,
  useNavigation,
} from 'react-router-dom';
import { searchShowById } from '../../api/apiHandler';
import closeIcon from '../../assets/close.svg';
import { ShowData } from '../../interfaces/interfaces';
import Loader from '../../loader/Loader';
import './detailedPage.scss';

export const detailedLoader: LoaderFunction = async ({ params }) => {
  try {
    const id = params.detailedId;

    if (!id) {
      throw new Error('Detailed ID is missing');
    }

    const showData: ShowData = await searchShowById(id);
    console.log(showData);
    return showData;
  } catch (error) {
    console.error('Error fetching show data:', error);
    return { error: 'Failed to fetch show data' };
  }
};

export const DetailedPage = () => {
  const showData = useLoaderData() as ShowData;
  const navigation = useNavigation();

  if (navigation.state === 'loading') {
    return <Loader isLoading={true} className="detailed-loader" />;
  }
  return (
    <section className="detailed-page">
      <Link className="detailed-page__close" to={'/'}>
        <img src={closeIcon} alt="cross icon" />
      </Link>
      <h2>{showData.Title}</h2>
      <div className="detailed-page__inner">
        <img
          src={
            showData.Poster !== 'N/A' || undefined
              ? showData.Poster
              : 'https://blocks.astratic.com/img/general-img-portrait.png'
          }
          alt="Show poster"
          width="300"
        />
        <p>{showData.Plot}</p>
      </div>
      <div className="detailed-page__additional-info">
        <p>
          <b>Released:</b> {showData.Year}
        </p>
        <p>
          <b>Language: </b>
          {showData.Language}
        </p>
        <p>
          <b>Genre:</b> {showData.Genre}
        </p>
        <p>
          <b>Actors: </b>
          {showData.Actors}
        </p>
      </div>
    </section>
  );
};
