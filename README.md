# Ex03 To-Do List using JavaScript
# Date: 12/08/2026
## AIM
To create a To-do Application with all features using JavaScript.

## ALGORITHM
### STEP 1
Build the HTML structure (index.html).

### STEP 2
Style the App (style.css).

### STEP 3
Plan the features the To-Do App should have.

### STEP 4
Create a To-do application using Javascript.

### STEP 5

Add functionalities.

### STEP 6
Test the App.

### STEP 7
Open the HTML file in a browser to check layout and functionality.

### STEP 8
Fix styling issues and refine content placement.

### STEP 9
Deploy the website.

### STEP 10
Upload to GitHub Pages for free hosting.

## PROGRAM:
### App.js
```js
import logo from './logo.svg';
import './App.css';
import ToDo from './components/ToDo';

function App() {
  return (
    <div className="App">
     <ToDo/>
    </div>
  );
}

export default App;

```
### ToDo.jsx
```js
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
```
### todo.css
```css
/* ==========================
   Global Theme
========================== */

:root{

    --primary:#2563eb;
    --primary-dark:#1d4ed8;
    --secondary:#06b6d4;

    --background:#f4f7fb;
    --surface:#ffffff;

    --text:#1f2937;
    --text-light:#6b7280;

    --border:#dbe4f0;

    --radius:12px;
    --shadow:0 10px 30px rgba(0,0,0,.08);

}

/* ==========================
   Reset
========================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;
}

body{
    background:var(--background);
}

/* ==========================
   Hero
========================== */

.hero{

    background:linear-gradient(135deg,var(--primary),var(--secondary));
    color:white;

    text-align:center;

    font-size:34px;
    font-weight:bold;

    padding:30px;

    letter-spacing:1px;

    box-shadow:0 5px 15px rgba(0,0,0,.15);

}

/* ==========================
   Container
========================== */

.container{

    width:min(900px,92%);
    margin:40px auto;

    background:var(--surface);

    border-radius:var(--radius);

    padding:35px;

    box-shadow:var(--shadow);

}

/* ==========================
   Row
========================== */

.row{

    display:flex;
    align-items:center;

    gap:20px;

    margin-bottom:22px;

}

/* ==========================
   Items
========================== */

.item:first-child{

    flex:1;

}

.item:last-child{

    flex:3;

}

/* ==========================
   Labels
========================== */

label{

    color:var(--text);

    font-weight:600;

    font-size:16px;

}

/* ==========================
   Inputs
========================== */

input,
textarea,
select{

    width:100%;

    padding:12px 15px;

    border:1px solid var(--border);

    border-radius:10px;

    font-size:15px;

    outline:none;

    transition:.3s;

    background:white;

}

textarea{

    min-height:120px;

    resize:vertical;

}

input:focus,
textarea:focus,
select:focus{

    border-color:var(--primary);

    box-shadow:0 0 0 4px rgba(37,99,235,.15);

}

/* ==========================
   Button
========================== */

button{

    background:linear-gradient(135deg,var(--primary),var(--secondary));

    color:white;

    border:none;

    padding:13px 35px;

    font-size:16px;

    font-weight:bold;

    border-radius:10px;

    cursor:pointer;

    transition:.3s;

}

button:hover{

    transform:translateY(-2px);

    box-shadow:0 10px 20px rgba(37,99,235,.25);

}

button:active{

    transform:scale(.98);

}

/* ==========================
   Placeholder
========================== */

::placeholder{

    color:#999;

}

/* ==========================
   Responsive
========================== */

@media(max-width:768px){

    .hero{

        font-size:28px;

        padding:22px;

    }

    .container{

        padding:25px;

    }

    .row{

        flex-direction:column;

        align-items:flex-start;

        gap:10px;

    }

    .item{

        width:100%;

    }

    button{

        width:100%;

    }

}

@media(max-width:480px){

    .hero{

        font-size:24px;

    }

    .container{

        padding:20px;

    }

    label{

        font-size:15px;

    }

}
```
## OUTPUT:
![alt text](screenshots/image.png)

## RESULT
The program for creating To-do list using JavaScript is executed successfully.