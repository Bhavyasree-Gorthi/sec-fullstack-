import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Add task
  const addTask = () => {
    const trimmed = input.trim();
    if (trimmed) {
      setTasks([...tasks, { text: trimmed, completed: false }]);
      setInput("");
    }
  };

  // Remove last task
  const removeLastTask = () => {
    setTasks(tasks.slice(0, -1));
  };

  // Mark task complete
  const completeTask = (index) => {
    setTasks((prev) =>
      prev.map((task, i) =>
        i === index ? { ...task, completed: true } : task
      )
    );

    // Remove completed task after 2 seconds
    setTimeout(() => {
      setTasks((prev) => prev.filter((_, i) => i !== index));
    }, 2000);
  };

  // Handle enter key in input
  const onInputKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
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
      <button className="remove-btn" onClick={removeLastTask} disabled={tasks.length === 0}>
        Remove
      </button>

      <ul className="task-list">
        {tasks.map((task, index) => (
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
  );
}

export default App;
