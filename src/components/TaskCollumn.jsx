import '../assets/css/taskColumn.css';
import Task from './Task';

export default function TaskCollumn({ ...props }) {
    return (
        <>
            <div className='task-collumn col-12 col-sm-3 col-md-3 p-0'>
                <div>
                    <h4>{props.title}</h4>
                </div>
                <div className='task-collumn-body'>
                    <Task status={props.title} />
                </div>
            </div>
        </>
    )
}
