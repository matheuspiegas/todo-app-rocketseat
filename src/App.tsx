import { Header } from './components/Header'
import styles from './App.module.css'
import { CreateTaskInput } from './components/CreateTaskInput'
import { TasksInfo } from './components/TasksInfo'
// import { EmptyTasks } from './components/EmptyTasks'
import { Task } from './components/Task'
import { TaskType } from '../types/index'
import { useState } from 'react'
import { EmptyTasks } from './components/EmptyTasks'

function App() {

  const [tasks, setTasks] = useState<TaskType[]>([
    {
      id: crypto.randomUUID(),
      name: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. Matheus Sales Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. Matheus Sales Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. Matheus Sales',
      isCompleted: false
    },
  ])

  const totalTasks = tasks.length
  const concludedTasks = tasks.filter((task) => task.isCompleted).length

  function handleCreateTask(content: string) {
    setTasks((tasks) => {
      return [
        ...tasks,
        {
          id: crypto.randomUUID(),
          name: content,
          isCompleted: false
        }
      ]
    })
  }

  function handleCompleteTask(id: string) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) return { ...task, isCompleted: !task.isCompleted }

      return { ...task }
    })

    setTasks(updatedTasks)
  }

  function handleDeleteTask(id: string) {
    const updatedTasks = tasks.filter((task) => task.id !== id)
    setTasks(updatedTasks)
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <CreateTaskInput onCreateTask={handleCreateTask} />
        <TasksInfo concluded={concludedTasks} created={totalTasks} />
        <div>
          {
            tasks.length > 0 ? tasks.map((task) => <Task onComplete={handleCompleteTask} onDelete={handleDeleteTask} task={task} key={task.id} />) : <EmptyTasks />
          }
        </div>
      </div>
    </>
  )
}

export default App
