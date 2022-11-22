import React, {useState} from 'react';
import {TodoContext} from './context/index';

import './App.css';

import TaskHeader from './components/TaskHeader/TaskHeader';
import TasksList from './components/TasksList/TasksList';
import EditTask from './components/EditTask/EditTask';


function App() {
    /**
     * список стартовых задач
     */
    const tasksArr = [
        { complited: false, title: 'Create tz', descr: 'some text', date: '12-12-2022', file: ''},
        { complited: true, title: 'Get item', descr: 'fetching item', date: '02-12-2022', file: ''},
        { complited: false, title: 'Come to home', descr: 'go throu to the forest', date: '14-04-2023', file: ''}
    ];

    const [title, setTitle] = useState('');
    const [descr, setDescr] = useState('');
    const [date, setDate] = useState('');
    const [file, setFile] = useState('');

    const [selectTask, setSelectTask] = useState(null);
    const [edit, setEdit] = useState(false);
    
    const [tasks, setTasks] = useState(tasksArr);


    return (
    <TodoContext.Provider value={{title,
                                descr,
                                date,
                                file,
                                setTitle,
                                setDescr,
                                setDate,
                                setFile,
                                tasks,
                                setTasks,
                                selectTask,
                                setSelectTask,
                                setEdit,
                                }}>
        <div className="App">
            <div>
                <TaskHeader/>
                <TasksList/>
            </div>
            {edit ? <EditTask/> : undefined}
        </div>
    </TodoContext.Provider>
    );
}

export default App;
