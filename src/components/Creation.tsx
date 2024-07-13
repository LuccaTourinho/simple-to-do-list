import React, { useState } from 'react';
import { useToDoList } from '../context/ToDoList';

const Creation: React.FunctionComponent = () => {
  const { insertToDoList } = useToDoList();
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== '') {
      insertToDoList(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className='flex flex-col justify-between gap-5 w-full h-[100px]'>
      <div className='bg-white h-10 w-full p-2 rounded-lg shadow-xl'>
        <input 
          type='text' 
          placeholder='Digit your ToDo Activity here' 
          value={inputValue}
          onChange={handleChange}
          className='w-full px-2 cursor-pointer focus:outline-none Play'
        />
      </div>
      <div className='flex flex-row justify-center gap-3 h-10 w-full'>
        <button 
          className='bg-slate-200 h-10 w-[80px] rounded-full hover:scale-110 Play shadow-xl font-bold'
          onClick={handleSubmit}
        >Submit</button>
        <button 
          className='bg-slate-200 h-10 w-[80px] rounded-full hover:scale-110 Play shadow-xl font-bold'
          onClick={() => setInputValue('')}
        >Reset</button>
      </div>
    </div>
  );
};

export default Creation;
