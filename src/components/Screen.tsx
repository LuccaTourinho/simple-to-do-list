import React,{useState} from 'react';
import Creation from './Creation';
import ToDo from './ToDo';
import { ToDoListFormat } from '../interfaces';


const Screen: React.FunctionComponent = () => {
  const [toDoList, setToDoList] = useState<ToDoListFormat[]>([{index: 0, ToDo: 'Do the laundry'}]);

  const insertToDoList = (newToDo: string) => {
    setToDoList((prevToDoList) => [...prevToDoList, {index: toDoList.length + 1,ToDo: newToDo}]);
  }

  const handleUpdatedToDo = (updatedToDo: ToDoListFormat) => {
    if(updatedToDo.index >= 0 && updatedToDo.index < toDoList.length){
        setToDoList(prevToDoList => prevToDoList.map(item => {
            if (item.index === updatedToDo.index) {
                return updatedToDo;
            } else {
                return item;
            }
        }));
    }
    else{
        console.log("Invalid Id");
    }
  }

  const handleDeletedTodo = (deletedToDo: ToDoListFormat) => {
    const newTodoList = toDoList.filter(item => item.index !== deletedToDo.index);
    newTodoList.forEach(item => {
        if(item.index > deletedToDo.index){
            item.index = item.index - 1;
        }
    });
    setToDoList(newTodoList);
  }

  return (
    <div className='flex flex-col w-[500px] sm:w-[600px] md:w-[700px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1440px] h-full p-8'>
        <Creation insertToDoList={insertToDoList}/>
        <div className='flex flex-col gap-3 p-8 w-full h-full'>
        {toDoList.map((toDoItem) => (
            <ToDo 
                key={toDoItem.index} 
                toDoItem={toDoItem} 
                handleUpdatedToDo={handleUpdatedToDo}
                handleDeletedTodo={handleDeletedTodo}
            />
        ))}
        </div>
    </div>
  );
};

export default Screen;
