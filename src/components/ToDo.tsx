import React, { useState } from 'react';
import { ToDoListFormat } from '../interfaces';
import { useToDoList } from '../context/ToDoList';

interface ToDoProps {
  toDoItem: ToDoListFormat;
}

const ToDo: React.FunctionComponent<ToDoProps> = ( props ) => {
  const { handleUpdatedToDo, handleDeletedTodo } = useToDoList();
  const [item, setItem] = useState<ToDoListFormat>(props.toDoItem);
  const [updateItem, setUpdateItem] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItem({ index: item.index, ToDo: e.target.value });
  };

  const toggleEdit = () => {
    setUpdateItem(!updateItem);
  };

  const handleEdit = () => {
    setUpdateItem(!updateItem);
    handleUpdatedToDo(item);
  };

  const handleDelete = () => {
    handleDeletedTodo(item);
  };

  return (
    <div className='flex flex-row bg-white h-10 w-full p-2 rounded-lg shadow-xl'>
      {!updateItem ? 
          <>
            <p className='w-[80%] lg:w-[90%]  px-2'>{item.ToDo}</p> 
            <div className='flex justify-between gap-2 py-1/2 w-[20%] lg:w-[10%]'>
              <button 
                className='flex justify-center w-full items-center p-1 bg-blue-400 text-white font-bold rounded-full hover:scale-110 shadow-lg'
                onClick={toggleEdit}
              ><i className="fa-solid fa-pen-to-square"></i></button>
              <button
                className='flex justify-center items-center p-1 w-full bg-red-400 text-white font-bold rounded-full hover:scale-110 shadow-lg'
                onClick={handleDelete}
              ><i className="fa-solid fa-trash"></i></button>
            </div>
          </>
          :
          <>
            <input 
              type='text' 
              placeholder='Digit your ToDo Activity here'
              value={item.ToDo}
              onChange={handleChange}
              className='w-[80%] lg:w-[90%] px-2 cursor-pointer focus:outline-none Play text-slate-500'
            />
            <div className='flex justify-between gap-2 py-1/2 w-[20%] lg:w-[10%]'>
              <button 
                className='flex justify-center items-center p-1 w-full bg-blue-400 text-white font-bold rounded-full hover:scale-110 shadow-lg'
                onClick={handleEdit}
              ><i className="fa-solid fa-pen-to-square"></i></button>
              <button
                className='flex justify-center items-center p-1 w-full bg-red-400 text-white font-bold rounded-full hover:scale-110 shadow-lg'
                onClick={handleDelete}
              ><i className="fa-solid fa-trash"></i></button>
            </div>
          </>
      }
    </div>
  );
};

export default ToDo;
