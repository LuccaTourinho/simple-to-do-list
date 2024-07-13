import React,{ useState } from 'react';


const Pagination: React.FunctionComponent = () => {
    const rowsPerPage: number = 10;
    const [page, setPage] = useState<number>(1)
    const [startIndex, setStartIndex] = useState<number>(0);
    const [endIndex, endStartIndex] = useState<number>(10);

  return (
    <div className='h-[10%] w-full flex flex-row justify-center items-center gap-6'>
      <i className="fa-solid fa-angles-left"></i>
      <i className="fa-solid fa-angle-left"></i>
      <span className='font-bold text-lg'>{page}</span>
      <i className="fa-solid fa-angle-right"></i>
      <i className="fa-solid fa-angles-right"></i>
    </div>
  );
};

export default Pagination;
