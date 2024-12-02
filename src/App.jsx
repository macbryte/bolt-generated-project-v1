import React, { useState } from 'react';
    import { format } from 'date-fns';

    function App() {
      const [todos, setTodos] = useState([]);
      const [newTodo, setNewTodo] = useState('');

      const addTodo = () => {
        if (newTodo.trim()) {
          const newTodoItem = {
            text: newTodo,
            date: new Date(),
          };
          setTodos([...todos, newTodoItem]);
          setNewTodo('');
        }
      };

      const removeTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
      };

      return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
            <h1 className="text-2xl font-bold mb-4">Todo App</h1>
            <div className="flex mb-4">
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                className="flex-grow border rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Add a new todo"
              />
              <button
                onClick={addTodo}
                className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Add
              </button>
            </div>
            <ul>
              {todos.map((todo, index) => (
                <li key={index} className="flex justify-between items-center mb-2">
                  <div>
                    <span>{todo.text}</span>
                    <span className="text-sm text-gray-500 ml-2">{format(todo.date, 'yyyy-MM-dd HH:mm')}</span>
                  </div>
                  <button
                    onClick={() => removeTodo(index)}
                    className="text-red-500 hover:text-red-600 focus:outline-none"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    export default App;
