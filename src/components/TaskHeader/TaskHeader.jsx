import React, {useContext, useState} from 'react';
import {TodoContext} from '../../context/index';

import './taskheader.scss';

const TaskHeader = () => {

    const {title, descr, date, file, setTitle, setDescr, setDate, setFile, setTasks} = useContext(TodoContext);

    /**
     * добавляем новою задачу
     * @param {*} e 
     */
    const onSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            complited: false,
            title,
            descr,
            date,
            file,
        };
        
        setTasks((prevTasks) => [
            ...prevTasks,
            newTask
        ]);

        setTitle('');
        setDescr('');
        setDate('');
        setFile('');
    };


    return (
        <div className='head' onSubmit={onSubmit} >
            <h1>Todo list. Tasks - 3</h1>

            <form action="">
                <input type="text" 
                    placeholder='Заголовок задачи'
                    name='title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />

                <input type="text" 
                    placeholder='Описание задачи'
                    name='descr'
                    value={descr}
                    onChange={(e) => setDescr(e.target.value)} />

                <input type="date"
                    name='date'
                    value={date}
                    onChange={(e) => setDate(e.target.value)} />

                <input type="file"
                    name='file'
                    value={file}
                    onChange={(e) => setFile(e.target.value)} />

                <button type='submit'>Добавить задачу</button>
            </form>
        </div>
    );
};

export default TaskHeader;
