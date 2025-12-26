import React, { useContext } from 'react';
import TaskContext from '../context/TaskContext';
import IconButton from '@mui/material/IconButton';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import StartIcon from '@mui/icons-material/Start';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import Draggable from 'react-draggable';

export default function Task({ status }) {
    const { tasks, setTasks } = useContext(TaskContext);

    const moveToCompleted = (id) => {
        let updated = tasks.map(task => {
            if (task.id === id) {
                return { ...task, status: 'Completed' };
            }
            return task;
        });
        setTasks(updated);
    }

    const startTask = (id) => {
        let updated = tasks.map(task => {
            if (task.id === id) {
                return { ...task, status: 'In Progress' };
            }
            return task;
        });
        setTasks(updated);
    }

    const dragTask = (e, id) => {
        e.preventDefault();
        let updated = tasks.map(task => {
            if (task.id === id) {
                return { ...task, status: task.status === 'To Do' ? 'In Progress' : task.status === 'In Progress' ? 'Completed' : 'To Do' };
            }
            console.log(task);
            return task;
        });
        setTasks(updated);
    }

    const nodeRef = React.useRef(null);
    return (
        <div>
            {
                tasks ? tasks.filter(task => task.status === status).map(filteredTask => (
                    <Draggable nodeRef={nodeRef} key={filteredTask.id}>
                        <div onDragStart={()=>{console.log("hello drage");}} className="task-card" ref={nodeRef}>
                        {/* <div onDragLeaveCapture={(event)=>{ dragTask(event, filteredTask.id) }} className="task-card" ref={nodeRef}> */}
                            <h6>
                                {filteredTask.title}
                                {
                                    filteredTask.status === 'Completed' &&
                                    <IconButton aria-label="completed" size="small" color="success" >
                                        <VerifiedOutlinedIcon />
                                    </IconButton>
                                }
                                {
                                    filteredTask.status === 'To Do' &&
                                    <IconButton onClick={() => startTask(filteredTask.id)} aria-label="start" size="small" color="success" >
                                        <StartIcon />
                                    </IconButton>
                                }
                                {
                                    filteredTask.status === 'In Progress' &&
                                    <IconButton onClick={() => moveToCompleted(filteredTask.id)} aria-label="complete" size="small" color="primary" >
                                        <CheckOutlinedIcon />
                                    </IconButton>
                                }
                            </h6>
                        </div>
                    </Draggable>
                )) : 'No tasks available'
            }
        </div>
    )
}