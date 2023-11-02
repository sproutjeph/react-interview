const Paginator = ({
  totalPages,
  hasPrevPage,
  prevPage,
  hasNextPage,
  nextPage,
  page,
}) =>
  page !== totalPages ? (
    <div className="flex justify-between p-3 bg-gray-300 mt-96">
      <div className="">
        Page {page} of {totalPages}
      </div>
      <div className="flex gap-8">
        <button disabled={hasPrevPage} onClick={prevPage}>
          prev
        </button>
        <button disabled={hasNextPage} onClick={nextPage}>
          Next
        </button>
      </div>
    </div>
  ) : (
    <></>
  );

export default Paginator;
