"use client";
import Link from "next/link";
import { useState } from "react";

type TodosType = {
  id: number;
  name: string;
  isDone: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<TodosType[]>([{ id: 1, name: "Buy milk", isDone: false }, { id: 2, name: "Buy eggs", isDone: false }, { id: 3, name: "Buy bread", isDone: false }]);
  const [input, setInput] = useState<string>("");
  const handleDone = (id: number) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo));
  };
  const handleAddTodo = () => {
    if (input) {
      setTodos([...todos, { id: todos.length + 1, name: input, isDone: false }]);
      setInput("");
    }
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <label htmlFor="todo">masukkan todo kedalam list:</label>
        <input className="border border-3" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => handleAddTodo()} className="border border-1 p-1 rounded-sm" id="todo">add todo</button>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          {todos.map((todo) => (
            <div className="flex items-center gap-2" key={todo.id}>
              <li className={`${todo.isDone ? 'line-through' : ''}`}>{todo.name}</li>
              <input type="checkbox" checked={todo.isDone} onChange={() => handleDone(todo.id)} />
            </div>
          ))}
        </ol>
        <Link className="underline text-blue-400" href="/about">ke about page</Link>
      </main>
    </div>
  );
}
