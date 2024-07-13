import React,{ useState, useEffect } from 'react';
import { ToDoListFormat } from '../interfaces';

interface PaginationProps {
  itemsPerPage: number;
  data: ToDoListFormat[];
  renderItems: (paginatedItems: ToDoListFormat[]) => React.ReactNode;
}

const Pagination: React.FunctionComponent<PaginationProps> = (props) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [paginatedData, setPaginatedData] = useState<ToDoListFormat[]>([]);

  useEffect(() => {
    const paginate = (page: number) => {
      const startIndex = (page - 1) * props.itemsPerPage;
      const endIndex = startIndex + props.itemsPerPage;
      setPaginatedData(props.data.slice(startIndex, endIndex));
    };
    paginate(currentPage);
  }, [props.data, currentPage, props.itemsPerPage]);

  const totalPages = () => {
    return Math.ceil(props.data.length / props.itemsPerPage);
  };

  const goToNextPage = () => {
    if(currentPage < totalPages()) {
      setCurrentPage(currentPage + 1);
    }
  }

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const goToFirstPage = () => {
    setCurrentPage(1);
  }

  const goToLastPage = () => {
    setCurrentPage(totalPages());
  }

  return (
    <>
      <div className='h-[15%] w-full flex flex-row justify-center items-center gap-6'>
      <button 
        disabled={currentPage === 1}
        className={`button ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={() => goToFirstPage()}
      >
        <i className={`fa-solid fa-angles-left ${currentPage === 1 ?  'text-gray-50' : 'text-black hover:scale-125 shadow-lg'}`}></i>
      </button>
      <button 
        disabled={currentPage === 1}
        className={`button ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={() => goToPrevPage()}
      >
        <i className={`fa-solid fa-angle-left ${currentPage === 1 ?  'text-gray-50' : 'text-black hover:scale-125 shadow-lg'}`}></i>
      </button>
      <span className='font-bold text-lg'>{currentPage}</span>
      <button 
        disabled={currentPage === totalPages()}
        className={`button ${currentPage === totalPages() ? 'disabled' : ''}`}
        onClick={() => goToNextPage()}
      >
        <i className={`fa-solid fa-angle-right ${currentPage === totalPages() ?  'text-gray-50' : 'text-black hover:scale-125 shadow-lg'}`}></i>
      </button>
      <button 
        disabled={currentPage === totalPages()}
        className={`button ${currentPage === totalPages() ? 'disabled' : ''}`}
        onClick={() => goToLastPage()}
      >
        <i className={`fa-solid fa-angles-right ${currentPage === totalPages() ?  'text-gray-50' : 'text-black hover:scale-125 shadow-lg'}`}></i>
      </button>
      </div>
      {props.renderItems(paginatedData)}
    </>
  );
};

export default Pagination;
