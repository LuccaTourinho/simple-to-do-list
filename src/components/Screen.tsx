import React from 'react';
import Creation from './Creation';
import ToDo from './ToDo';
import Pagination from './Pagination';
import { useToDoList } from '../context/ToDoList';

const Screen: React.FunctionComponent = () => {
  const { toDoList } = useToDoList();

  return (
    <div className='flex flex-col w-[500px] sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1440px] h-full p-8'>
      <Creation />
      <div className='flex flex-col gap-3 p-8 w-full h-[90%]'>
        {toDoList.map((toDoItem) => (
          <ToDo key={toDoItem.index} toDoItem={toDoItem} />
        ))}
      </div>
      <Pagination/>
    </div>
  );
};

export default Screen;
