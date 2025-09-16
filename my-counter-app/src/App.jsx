
import { useState } from "react";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  // For the counter demo
  const [count, setCount] = useState(0);

  // For the To-Do list
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    const trimmed = input.trim();
    if (trimmed) {
      setTasks([...tasks, trimmed]);
      setInput("");
    }
  };

  const removeTask = () => {
    setTasks(tasks.slice(0, -1));
  };

  // Mark task complete and remove after delay
  const completeTask = (index) => {
    setTasks((prev) =>
      prev.map((task, i) =>
        i === index ? { text: task, completed: true } : task
      )
    );
    setTimeout(() => {
      setTasks((prev) => prev.filter((_, i) => i !== index));
    }, 2000);
  };

  // If tasks are strings, convert them into objects for consistency
  const taskList = tasks.map((task) =>
    typeof task === "string" ? { text: task, completed: false } : task
  );

  // Enter key handler for adding tasks
  const onInputKeyDown = (e) => {
    if (e.key === "Enter") addTask();
  };

  return (
    <>
      {/* Vite + React demo */}
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Mini To-Do List */}
      <div className="container">
        <h2>Mini To-Do List</h2>
        <input
          id="myInput"
          className="task-input"
          placeholder="Enter task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onInputKeyDown}
        />
        <button className="add-btn" onClick={addTask} disabled={!input.trim()}>
          Add Task
        </button>
        <button className="remove-btn" onClick={removeTask} disabled={tasks.length === 0}>
          Remove
        </button>
        <ul className="task-list">
          {taskList.map((task, index) => (
            <li
              key={index}
              className={`task-item ${task.completed ? "completed" : ""}`}
            >
              {task.text}
              {!task.completed && (
                <button
                  className="complete-btn"
                  onClick={() => completeTask(index)}
                >
                  Complete
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
