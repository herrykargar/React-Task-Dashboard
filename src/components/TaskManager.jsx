import React from 'react'
// import Button from '../ui/Button';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import TaskCollumn from './TaskCollumn';
import TaskContext from '../context/TaskContext';

// MUI Modal imports
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

export default function TaskManager() {

    const initialTasks = [
        {
            id: 1, title: 'Task 1 eat apple',
            status: 'To Do',
        },
        {
            id: 2, title: 'Task 2 walk the dog',
            status: 'In Progress',
        },
        {
            id: 3, title: 'Task 3 read a book',
            status: 'Completed',
        }, {
            id: 4, title: 'Task 4 write code',
            status: 'In Progress',
        }, {
            id: 5, title: 'Task 5 go shopping',
            status: 'To Do',
        },
    ];

    const [tasks, setTasks] = React.useState(initialTasks);
    const [open, setOpen] = React.useState(false);
    const [activeTask, setActiveTask] = React.useState(null);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const addToDo = () => {
        const input = document.querySelector('input[type="text"]');
        const title = input.value;
        if (title.trim() === '') return;
        const newTask = {
            id: tasks.length + 1,
            title: title,
            status: 'To Do',
        };
        setTasks([...tasks, newTask]);
        input.value = '';
        handleClose();
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #dcdcdcff',
        boxShadow: 24,
        p: 4,
    };

    const handleTaskDrop = (status, position) => {
        console.log(`Dropped on ${status} at position ${position}`);
        if (activeTask === null || activeTask === undefined) return;
        let updated = tasks.map(task => {
            if (task.id === activeTask) {
                return { ...task, status: status };
            }
            return task;
        });
        setTasks(updated);
        setActiveTask(null);
    }

    return (
        <>
            <div className='section'>
                <div className='d-flex justify-content-start align-items-center gap-5'>
                    <div>
                        <h2>Task Manager</h2>
                        <p>This is where you can manage your tasks.</p>
                        <h1>active task {activeTask}</h1>
                    </div>
                    <div>
                        <Button onClick={handleOpen} variant='contained' color='warning' startIcon={<AddIcon />}>
                            Add Task
                        </Button>
                    </div>
                </div>

                <div>
                    {
                        <TaskContext.Provider value={{ tasks, setTasks, activeTask, setActiveTask, handleTaskDrop }}>
                            <div className="row justify-content-center gap-3">
                                {
                                    ['To Do', 'In Progress', 'Completed'].map((what) => (
                                        <TaskCollumn key={what} title={what} />
                                    ))
                                }
                            </div>
                        </TaskContext.Provider>
                    }
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <input type="text" className='form-control mb-3' placeholder='Task Title' />
                    <Button onClick={addToDo} variant="contained" color="primary">Add Task</Button>
                </Box>
            </Modal>
        </>
    )
}