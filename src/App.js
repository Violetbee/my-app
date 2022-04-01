import Form from "./components/Form";
import Header from "./components/Header";
import { useState } from "react";
import TodoLi from "./components/TodoLi";
function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Header />
      <div className="todo">
        <Form
          value={value}
          todos={todos}
          setTodos={setTodos}
          setValue={setValue}
        />
        <TodoLi value={value} todos={todos} />
      </div>
    </div>
  );
}
export default App;
