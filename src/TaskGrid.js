import React from 'react';

import TaskItem from './TaskItem';

class TaskGrid extends React.Component
{
    render()
    {
        const taskItems = this.props.tasks.map(task =>
        {
            return <TaskItem task={task} key={task.id} />
        });

            return (
                <div className="container">
                    { taskItems }
                </div>
            );
     }
}

export default TaskGrid;