import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ToDoListFormat } from '../interfaces';
import { testToDos } from '../test/variables';

interface ToDoListContextProps {
  toDoList: ToDoListFormat[];
  insertToDoList: (newToDo: string) => void;
  handleUpdatedToDo: (updatedToDo: ToDoListFormat) => void;
  handleDeletedTodo: (deletedToDo: ToDoListFormat) => void;
}

const ToDoListContext = createContext<ToDoListContextProps | undefined>(undefined);

const ToDoListProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toDoList, setToDoList] = useState<ToDoListFormat[]>(testToDos);

  const insertToDoList = (newToDo: string) => {
    setToDoList((prevToDoList) => [...prevToDoList, { index: prevToDoList.length, ToDo: newToDo }]);
  };

  const handleUpdatedToDo = (updatedToDo: ToDoListFormat) => {
    if (updatedToDo.index >= 0 && updatedToDo.index < toDoList.length) {
      setToDoList((prevToDoList) => 
        prevToDoList.map((item) => (item.index === updatedToDo.index ? updatedToDo : item))
      );
    } else {
      console.log('Invalid Id');
    }
  };

  const handleDeletedTodo = (deletedToDo: ToDoListFormat) => {
    const newTodoList = toDoList.filter((item) => item.index !== deletedToDo.index);
    newTodoList.forEach((item) => {
      if (item.index > deletedToDo.index) {
        item.index -= 1;
      }
    });
    setToDoList(newTodoList);
  };

  return (
    <ToDoListContext.Provider value={{ toDoList, insertToDoList, handleUpdatedToDo, handleDeletedTodo }}>
      {children}
    </ToDoListContext.Provider>
  );
};

const useToDoList = () => {
  const context = useContext(ToDoListContext);
  if (context === undefined) {
    throw new Error('useToDoList must be used within a ToDoListProvider');
  }
  return context;
};

export { ToDoListProvider, useToDoList };
