import React, { useState } from 'react'

const NewTask = (props) => {

    const [task, setTask] = useState({ title: "", description: "" });

    const HandleChange=(event)=>{
        const name = event.target.name;
        setTask((oldTask)=>{
            return {...oldTask,[name]:event.target.value};
        })
    }

    const HandleSubmit = (event) => {

        event.preventDefault();
        // console.log(task);
        props.addTask(task);
        setTask({title: "", description: "" })

    }
    

    return (
        <div>
            <form class="form-horizontal" onSubmit={HandleSubmit} >
                <div class="form-group">
                    <label class="control-label col-sm-2" for="title">Title :</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="title" placeholder="Enter title" name="title" value={task.title} onChange={HandleChange} />
                    </div>
                </div>
                <div class="form-group">
                    <label class="control-label col-sm-2" for="description">Description :</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="description" placeholder="Enter description" name="description" value={task.description} onChange={HandleChange} />
                    </div>
                </div>
                {/* <div class="form-group">        
      <div class="col-sm-offset-2 col-sm-10">
        <div class="checkbox">
          <label><input type="checkbox" name="remember"/> Remember me</label>
        </div>
      </div>
    </div> */}
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                        <button type="submit" class="btn btn-success">Submit</button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default NewTask