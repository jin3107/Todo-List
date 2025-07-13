import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [jobs, setJobs] = useState([]);
  const [input, setInput] = useState('');

  const handleAddJob = () => {
    if (input.trim()) {
      setJobs(prev => {
        const newJobs = [...prev, input];
        console.log(newJobs);
        return newJobs;
      });
      setInput('');
    }
  }

  return (
    <>
      <div>
        <h2>📝 To-do List</h2>
        <input 
          value={input}
          type="text" 
          placeholder="Enter the job..."
          onChange={e => setInput(e.target.value)}
        />
        <button onClick={handleAddJob}>Add</button>
      </div>

      <div>
        <ul>
          {jobs.map((job, index) => (
            <TodoItem key={index} text={job} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default TodoList;