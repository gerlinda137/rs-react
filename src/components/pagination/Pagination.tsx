import './Pagination.scss';

const Pagination = () => {
  return (
    <section className="pagination">
      <button className="pagination__btn pagination__btn--left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
        >
          <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
        </svg>
      </button>
      <div className="pagination__inner">
        <span className="pagination__current">1</span>
        <span>/</span>
        <span className="pagination__total">10</span>
      </div>
      <button className="pagination__btn pagination__btn--right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
        >
          <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
        </svg>
      </button>
    </section>
  );
};

export default Pagination;
