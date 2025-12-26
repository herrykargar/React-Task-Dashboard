import React, { useContext } from 'react';
import TaskContext from '../context/TaskContext';
import IconButton from '@mui/material/IconButton';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import StartIcon from '@mui/icons-material/Start';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import DropArea from './DropArea';

export default function Task({ status }) {
    const { tasks, setTasks } = useContext(TaskContext);
    const { activeTask, setActiveTask } = useContext(TaskContext);

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

    return (
        <div>
            <DropArea status={status} position={0}/>
            {

                tasks ? tasks.filter(task => task.status === status).map(filteredTask => (
                    <div key={filteredTask.id}>
                        <div onDragStart={() => { setActiveTask(filteredTask.id) }} onDragEnd={() => setActiveTask(null)} className="task-card" draggable>
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
                        <DropArea status={status} position={filteredTask.id + 1}/>
                    </div>
                )) : 'No tasks available'
            }
        </div >
    )
}