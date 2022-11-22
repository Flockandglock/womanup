import React, { useContext, useState } from 'react';
import { TodoContext } from '../../context/index';

import './edittask.scss';

const EditTask = () => {

    const { selectTask, tasks, setTasks, setSelectTask, setEdit } = useContext(TodoContext);

    const [title, setTitle] = useState('');
    const [descr, setDescr] = useState('');
    const [date, setDate] = useState('');

    /**
     * закрывает наше форму с изменениями
     */
    const closeEdit = () => {
        setEdit(false)
    };

    /**
     * меняем поля задачи на новые, по индексу
     * @param {number} index 
     */
    const onSubmit = (index = selectTask) => {
        setTasks((prevTasks) =>
            prevTasks.map((task, curIndx) =>
                index === curIndx
                    ? {
                          ...task,
                          title,
                          descr,
                          date
                      }
                    : task,
            ),
        );
        setEdit(false);
    };


    return (
        <form className='edit' onSubmit={() => onSubmit()}>
            <input type="text" 
                placeholder='новый заголовок'
                name='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)} />

            <input type="text" 
                placeholder='новое описание'
                name='descr'
                value={descr}
                onChange={(e) => setDescr(e.target.value)} />

            <input type="date" 
                name='date'
                value={date}
                onChange={(e) => setDate(e.target.value)}/>

            <button type='submit' >Изменить</button>
            <button onClick={closeEdit}>Закрыть</button>
        </form>
    );
};

export default EditTask;