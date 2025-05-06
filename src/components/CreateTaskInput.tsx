import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { CreateTaskButton } from './buttons/CreateTaskButton'
import styles from './CreateTaskInput.module.css'

interface CreateTaskInputProps {
  onCreateTask: (content: string) => void
}


export function CreateTaskInput({ onCreateTask }: CreateTaskInputProps) {
  const [taskContent, setTaskContent] = useState('')

  function handleTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setTaskContent(event.currentTarget.value)
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault()
    onCreateTask(taskContent)
    setTaskContent("")
  }

  function handleInvalidTask(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório")
  }

  return (
    <form className={styles.container} onSubmit={handleCreateTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className={styles.input}
        value={taskContent}
        onChange={handleTaskChange}
        onInvalid={handleInvalidTask}
        required
      />
      <CreateTaskButton />
    </form>
  )
}