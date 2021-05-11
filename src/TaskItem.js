import React from 'react';

let todoArr = [];
let inProgArr = [];
let reviewArr = [];
let doneArr = [];

const taskArr = task =>
{
    if (task.column === 'todo')
    {
        todoArr.push({
            id: task.id,
            title: task.title,
            type: task.type,
            column: task.column
        });

        createBoard(todoArr);
    }

    else if (task.column === 'in-progress')
    {
        inProgArr.push({
            id: task.id,
            title: task.title,
            type: task.type,
            column: task.column
        });

        createBoard(inProgArr);
    }

    else if (task.column === 'review')
    {
        reviewArr.push({
            id: task.id,
            title: task.title,
            type: task.type,
            column: task.column
        });

        createBoard(reviewArr);
    }

    else
    {
        doneArr.push({
            id: task.id,
            title: task.title,
            type: task.type,
            column: task.column
        });

        createBoard(doneArr);
    }
}

const createBoard = taskArr =>
{
    document.write("<table><thead><tr><th>" + taskArr[0].column + "</th></tr></thead>");

    if (taskArr.length)
    {
        document.write("<tr><td>" + taskArr[taskArr.length - 1].title + "</td></tr>");
        document.write("<tr><td>" + taskArr[taskArr.length - 1].id + "</td></tr>");
        document.write("<tr><td>" + taskArr[taskArr.length - 1].type + "</td></tr></table>");
    }
}

const TaskItem = props =>
{
    return taskArr(props.task);
}

export default TaskItem;

