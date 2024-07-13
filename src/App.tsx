import Screen from "./components/Screen";
import { ToDoListProvider } from "./context/ToDoList";

function App() {
  return (
    <ToDoListProvider>
      <div className="flex justify-center bg-blue-100 h-screen w-screen">
        <Screen/>
      </div>
    </ToDoListProvider>
  )
}

export default App;
