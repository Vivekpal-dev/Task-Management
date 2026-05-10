import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Complete frontend setup', status: 'Pending' },
    { id: 2, text: 'Build login page', status: 'Completed' },
  ])
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    if (newTask.trim() === '') return
    const task = { id: Date.now(), text: newTask, status: 'Pending' }
    setTasks([...tasks, task])
    setNewTask('')
  }

  const toggleStatus = (id) => {
    setTasks(tasks.map(task =>
      task.id === id
        ? { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' }
        : task
    ))
  }

  return (
    <div className="container">
      <div className="login-box">
        <h1>Task Management Dashboard</h1>
        <p className="subtitle">Login & Task Tracking UI</p>

        <div className="login-section">
          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />
          <button className="login-btn">Login</button>
        </div>

        <div className="dashboard">
          <div className="card">
            <h2>Total Tasks</h2>
            <p>{tasks.length}</p>
          </div>
          <div className="card">
            <h2>Completed</h2>
            <p>{tasks.filter(t => t.status === 'Completed').length}</p>
          </div>
          <div className="card">
            <h2>Pending</h2>
            <p>{tasks.filter(t => t.status === 'Pending').length}</p>
          </div>
        </div>

        <div className="task-input">
          <input
            type="text"
            placeholder="Add new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={addTask}>Add Task</button>
        </div>

        <div className="task-list">
          {tasks.map(task => (
            <div className="task-card" key={task.id}>
              <h3>{task.text}</h3>
              <span>{task.status}</span>
              <button onClick={() => toggleStatus(task.id)}>
                {task.status === 'Pending' ? 'Mark Completed' : 'Mark Pending'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
