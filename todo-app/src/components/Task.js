import React from 'react'
import { useState } from 'react';


const Task = (props) => {
    const { tasklist, setTaskList } = props

    const [task, setTask] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();

        if (task.length === 0) {
            return;
        }

        const taskItem = {
            text: task,
            complete: false
        }

        setTaskList([...tasklist, taskItem])

        setTask("")
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <input  className="form-control" name='task' type='text' onChange={(e) => { setTask(e.target.value) }} value={task} />
                    <button className="btn btn-primary m-2" type='submit' >Add task</button>
                </div>
            </form>
            <hr />
        </div>
    )
}

export default Task