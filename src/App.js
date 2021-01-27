import React,{useState} from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';


const App = () => {
  const[tasks, setTasks] = useState([
        {
            id:1,
            text: 'Start to build music player pwa',
            day: 'Jan 27 6:00pm',
            reminder:'false',
        },
        {
            id:2,
            text: 'Start to build image gallery',
            day: 'Jan 28 6:00pm',
            reminder:'true',
        },
        {
            id:3,
            text: 'Start to build sleep tracker',
            day: 'Jan 27 6:00pm',
            reminder:'true',
        },
    ])

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id ))
  }
  return (
    <div className="container">
      <Header />
      { tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask}/>) 
        : ('No Tasks to show')}
    </div>
  )
}

export default App;
