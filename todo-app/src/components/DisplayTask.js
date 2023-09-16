import React from 'react'

const DisplayTask = (props) => {
    const {tasklist,setTaskList}=props

    const handleDelete = (delIdx)=>{
        const filteredTasks = tasklist.filter((task,i)=>{
          return i !== delIdx;
        });
        setTaskList(filteredTasks); 
      }
    
      const handleTaskChecker = (idx)=>{
        const updatedTasklist = tasklist.map((task,i)=>{
          if (idx === i ){
            //task.complete = ! task.complete;
            const updatedTask = {...task,complete: !task.complete}
            return updatedTask;
    
          }
          return task;
        })
        setTaskList(updatedTasklist);
      }
  
  
  
    return (
        <div>
        <ol >
          {
            tasklist.map((task,idx) =>{
              const styleClasses = ['notDone'];
              if (task.complete) {
                styleClasses.push('done');
              }

              return (
                 <li key={idx}> 
                 <span className={styleClasses.join(" ")} >{task.text}</span> 
                 <input className="custom-control-input" onChange={(e)=>{handleTaskChecker(idx)} } type='checkbox'checked={task.complete}  />
                 <button className="btn btn-danger m-2" onClick={(e)=>handleDelete(idx) } >Delete</button>
                 </li> 
              )
            })
          }
        </ol>
      </div>
  )
}

export default DisplayTask