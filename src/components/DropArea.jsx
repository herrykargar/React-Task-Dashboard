import '../assets/css/taskColumn.css';
import { useState } from 'react';
import TaskContext from '../context/TaskContext';
import { useContext } from 'react';

export default function DropArea({ status, position }) {
  const [showDrop, setShowDrop] = useState(false);
  const { handleTaskDrop } = useContext(TaskContext);

  return (
    <section onDragEnter={()=> setShowDrop(true)} onDragLeave={()=> setShowDrop(false)} className={showDrop ? 'drop-area' : 'hide-drop'} onDrop={()=> {
        handleTaskDrop(status, position);
        setShowDrop(false);
    }} onDragOver={(e)=> e.preventDefault()}>
      Drop Here
    </section>
  )
}
