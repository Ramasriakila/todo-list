import {useRef,useState} from "react";
import "../style/todo.css";

function ToDo()
{

    const taskTextBox = useRef(null);
    const taskDescBox = useRef(null);
    const taskTypeBox = useRef(null);
    const taskDateBox = useRef(null);
    const taskTimeBox = useRef(null);
    
    const toDo={
        taskName:"",   
        taskDesc:"",
        taskType:"",
        taskDate:"",
        taskTime:""
    };
   
    const [taskList,setTaskList] = useState([]);


   function handleAddTask() {
   toDo.taskName = taskTextBox.current.value;
   toDo.taskDesc = taskDescBox.current.value;
   toDo.taskType = taskTypeBox.current.value;
   toDo.taskDate = taskDateBox.current.value;
   toDo.taskTime = taskTimeBox.current.value;
   setTaskList([...taskList,toDo]);  
   console.log(taskList); 
   
  }




    return (<>
    <header className="hero">My Task List</header>
    <div className="container">
        <div className="row">
            <div className="item">
                <label>Add Task</label>
            </div>
             <div className="item">
                <input type="text"
                title="Enter task here..."
                placeholder="Enter task here..."
                ref={taskTextBox} />
             </div>
             
        </div>

         <div className="row">
            <div className="item">
                <label>Add Desc</label>
            </div>
             <div className="item">
                <textarea 
                placeholder="Enter task description here..."
                ref={taskDescBox}
                ></textarea>
             </div>
        </div>

        <div className="row">
            <div className="item">
                <label>Task Type</label>
            </div>
             <div className="item">
                <select ref={taskTypeBox}>
                    <option 
                    placeholder="Select task type">Select task type</option>
                    <option>Personal</option>
                     <option>College</option>
                      <option>Shopping</option>
                </select>
               
             </div>
        </div>
        <div className="row">
            <div className="item">
                <label>Due Date</label>
            </div>
             <div className="item">
                <input type="date"
                ref={taskDateBox}
                 defaultValue={new Date().toISOString().split('T')[0]} />
             </div>
        </div>
        <div className="row">
            <div className="item">
                <label>Time</label>
            </div>
             <div className="item">
                <input type="time"
                ref={taskTimeBox}
                 defaultValue={new Date().toTimeString().slice(0, 5)} />
             </div>
        </div>
        <div className="row">
            <div className="item">
                
            </div>
             <div className="item">
                <button onClick={handleAddTask}>Add</button>
             </div>
        </div>
    </div>
    <div>
        <h2>Task List</h2>
        <ul>
            {taskList.map((task, index) => (
                <li key={index}>
                    <strong>{task.taskName}</strong> - {task.taskDesc} ({task.taskType}) - {task.taskDate} at {task.taskTime}
                </li>
            ))}
        </ul>
    </div>
    </>)
}

export default ToDo;