import './Loader.scss';

interface LoaderProps {
  isLoading: boolean;
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({
  isLoading,
  className,
}: LoaderProps) => {
  return isLoading ? (
    <div
      className={
        className ? `loader-container ${className}` : 'loader-container'
      }
    >
      <div className="loader"></div>
      <p>Loading...</p>
    </div>
  ) : null;
};

export default Loader;
