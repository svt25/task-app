// DELETE
//
// import React from 'react';
//
// const TaskBoard = props =>
// {
//
// }
//
// export default TaskBoard;
//
// // import React from 'react';
// //
// // // let todoArr = [];
// // // let inProgArr = [];
// // // let reviewArr = [];
// // // let doneArr = [];
// // //
// // // const taskArr = task =>
// // // {
// // //     if (task.column === 'todo')
// // //     {
// // //         todoArr.push({
// // //            id: task.id,
// // //            title: task.title,
// // //            type: task.type,
// // //            column: task.column
// // //         });
// // //     }
// // //
// // //     else if (task.column === 'in-progress')
// // //     {
// // //         inProgArr.push({
// // //            id: task.id,
// // //            title: task.title,
// // //            type: task.type,
// // //            column: task.column
// // //         });
// // //     }
// // //
// // //     else if (task.column === 'review')
// // //     {
// // //         reviewArr.push({
// // //            id: task.id,
// // //            title: task.title,
// // //            type: task.type,
// // //            column: task.column
// // //         });
// // //     }
// // //
// // //     else
// // //     {
// // //         doneArr.push({
// // //            id: task.id,
// // //            title: task.title,
// // //            type: task.type,
// // //            column: task.column
// // //         });
// // //     }
// //
// //     // for (let i = 0; i < tasks.length; i++)
// //     // {
// //     //     if (tasks[i].column ===
// //     //     {
// //     //         todoArr.push({
// //     //            id: tasks[i].id,
// //     //            title: tasks[i].title,
// //     //            type: tasks[i].type,
// //     //            column: tasks[i].column
// //     //         });
// //     //     }
// //     //
// //     //     else if (tasks[i].column === 'in-progress')
// //     //     {
// //     //         inProgArr.push({
// //     //            id: tasks[i].id,
// //     //            title: tasks[i].title,
// //     //            type: tasks[i].type,
// //     //            column: tasks[i].column
// //     //         });
// //     //     }
// //     //
// //     //     else if (tasks[i].column === 'review')
// //     //     {
// //     //         reviewArr.push({
// //     //            id: tasks[i].id,
// //     //            title: tasks[i].title,
// //     //            type: tasks[i].type,
// //     //            column: tasks[i].column
// //     //         });
// //     //     }
// //     //
// //     //     else {
// //     //         doneArr.push({
// //     //            id: tasks[i].id,
// //     //            title: tasks[i].title,
// //     //            type: tasks[i].type,
// //     //            column: tasks[i].column
// //     //         });
// //     //     }
// //     // }
// // // }
// //
// // // const createBoard = task =>
// // // {
// // //     if (task.column === 'todo')
// // //     {
// // //         for (let i = todoArr.length - 1; i < todoArr.length; i++)
// // //         {
// // //             document.write("<thead><tr><th>To Do</th></tr></thead><tr><td>" + todoArr[i].title +
// // //             "</td></tr><tr><td>" + todoArr[i].id + "</td></tr><tr><td>" + todoArr[i].type +
// // //             "</td></tr><tr><td>" + todoArr[i].column + "</td></tr>");
// // //         }
// // //     }
// // //
// // //     else if (task.column === 'in-progress')
// // //     {
// // //         for (let i = inProgArr.length - 1; i < inProgArr.length; i++)
// // //         {
// // //             document.write("<thead><tr><th>In Progress</th></tr></thead><tr><td>" + inProgArr[i].title +
// // //             "</td></tr><tr><td>" + inProgArr[i].id + "</td></tr><tr><td>" + inProgArr[i].type +
// // //              "</td></tr><tr><td>" + inProgArr[i].column + "</td></tr>");
// // //         }
// // //     }
// // //
// // //     else if (task.column === 'review')
// // //     {
// // //         for (let i = reviewArr.length - 1; i < reviewArr.length; i++)
// // //         {
// // //             document.write("<thead><tr><th>Review</th></tr></thead><tr><td>" + reviewArr[i].title +
// // //             "</td></tr><tr><td>" + reviewArr[i].id + "</td></tr><tr><td>" + reviewArr[i].type +
// // //             "</td></tr><tr><td>" + reviewArr[i].column + "</td></tr>");
// // //         }
// // //     }
// // //
// // //     else
// // //     {
// // //         for (let i = doneArr.length - 1; i < doneArr.length; i++)
// // //         {
// // //             document.write("<thead><tr><th>Done</th></tr></thead><tr><td>" + doneArr[i].title +
// // //             "</td></tr><tr><td>" + doneArr[i].id + "</td></tr><tr><td>" + doneArr[i].type +
// // //             "</td></tr><tr><td>" + doneArr[i].column + "</td></tr>");
// // //         }
// // //     }
// // // }
// //
// // // const todoTable = task =>
// // // {
// // //     document.write("<thead><tr><th>" + task.title + "</th></tr></thead>");
// // //     document.write("<tr><td>" + task.id + "</td></tr>");
// // //     document.write("<tr><td>" + task.type + "</td></tr>");
// // // }
// //
// // const createBoard = task =>
// // {
// //     if (task.column === 'todo')
// //     {
// //         todoTable(task);
// //     }
// // }
// //
// // const TaskBoard = props =>
// // {
// //     // taskArr(props.task);
// //
// //     return (
// //       createBoard(props.task)
// //     );
// // }
// //
// // export default TaskBoard;
// //
// //
// //
// // // const createBoard = task =>
// // // {
// // //
// // // }
// // //
// // // const checkStatus = (task) =>
// // // {
// // //     const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
// // //     let taskGrid = this.props.tasks;
// // //     taskGrid.splice(taskIndex, 1);
// // //     console.log(taskGrid);
// // //     this.props.onUpdateTaskGrid(taskGrid);
// // // }
// // //
// // // const TaskBoard = props =>
// // // {
// // //
// // // }
// //
// // // <div>
// // //     <thead>
// // //         <tr>
// // //             <th>To do</th>
// // //             <th>In Progress</th>
// // //             <th>Review</th>
// // //             <th>Done</th>
// // //         </tr>
// // //     </thead>
// // //     <tbody>
// // //         <tr>
// // //             <td>hi</td>
// // //             <td>hi</td>
// // //             <td>hi</td>
// // //             <td>hi</td>
// // //         </tr>
// // //     </tbody>
// // // </div>