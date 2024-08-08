import './Loader.scss';

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }: LoaderProps) => {
  return isLoading ? (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Loading...</p>
    </div>
  ) : null;
};

export default Loader;
