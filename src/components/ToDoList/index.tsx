"use client";
import { Todo } from "@/types";
import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ToDoList = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: uuidv4(), title: "مطالعه ری‌اکت" },
    { id: uuidv4(), title: "تمرین برنامه‌نویسی" },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = newTodo.trim();
    if (!title) return;

    const newItem = {
      id: uuidv4(),
      title,
    };

    setTodos([...todos, newItem]);
    setNewTodo("");
  };

  const handleDelete = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  return (
    <div className="max-w-md mx-auto p-10 bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">لیست کارها</h2>

      <form onSubmit={handleAddTodo} className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="عنوان وظیفه جدید..."
          value={newTodo}
          onChange={handleChange}
          className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
          autoFocus
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
        >
          افزودن
        </button>
      </form>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg hover:scale-105 transition duration-500"
          >
            <span>{todo.title}</span>
            <button
              onClick={() => handleDelete(todo.id)}
              className="text-red-600 hover:text-red-800"
            >
              حذف
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
