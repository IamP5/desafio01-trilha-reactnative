import React, { useState } from 'react';


import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
 
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    if (newTaskTitle != ('')) {
      const data = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false
      }

      setTasks(oldState => [...oldState, data]);

    }else {
        console.log("erro")
    }
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    
    const task = tasks.find(task => task.id == id)
    if (task != undefined) {
      task.done = !task.done;
      setTasks(oldState =>[...oldState]);
    }
    console.log(id)
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks(oldState => oldState.filter(
      task => task.id !== id
    ));
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask}
      />
    </>
  )
}