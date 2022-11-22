import React, { useContext, useState } from 'react';
import { TodoContext } from '../../context/index';

import './taskslist.scss';

const TasksList = () => {

    const { title, descr, date, file, tasks, setTasks, setSelectTask, setEdit } = useContext(TodoContext);

    /**
     * Переключает свойство complited на противоположное
     * @param {number} index индекс нашей таски
     */
    const toggleComplited = (index) => {
        setTasks((prevTasks) =>
            prevTasks.map((task, curIndx) =>
                index === curIndx
                    ? {
                          ...task,
                          complited: !task.complited,
                      }
                    : task,
            ),
        );
    };

    /**
     * удаление задачи
     * @param {number} index 
     */
    const removeTask = (index) => {
        setTasks((prevTasks) =>
            prevTasks.filter((task, curIndx) => index !== curIndx)
        );
    };

    /**
     * выбор задачи по индексу для редактирования
     * @param {number} index 
     */
    const selectTaskForEdit = (index) => {
        setSelectTask(index);
        setEdit(true);
    };

    /**
     * рендерит список задач
     * @param {array} arr 
     * @returns {array}
     */
    const renderTasks = (arr) => {
        return arr.map((task, index) => (
            <li key={index} className={task.complited ? 'list__item-complited' : 'list__item'}>
                <h3 className={task.complited ? 'title-complited' : ''}>{task.title}</h3>
                <div className='list__item-descr'>{task.descr}</div>
                <div className='list__item-date'>Дата окончания: {task.date}</div>
                <div className='list__item-file'  > {file.length}</div>
                <button onClick={() => selectTaskForEdit(index)}>Редактировать</button>
                <button onClick={() => toggleComplited(index)}>Сделано</button>
                <button onClick={() => removeTask(index)}>Удалть</button>
            </li>
        ));
    };

    const element = renderTasks(tasks);


    return <ul className='list'>{element}</ul>;
};

export default TasksList;
