import React from 'react'

function Task(props) {
    const { title, description } = props.task

    const handleDelete=(id)=>{
        // alert(id);
        props.removeTask(id)
    };


    console.log(props.task);
    return (
        <article>
            <div className='jumbotron'>


                <div className="card">
                    <div className="card-header">
                        <h3>
                            <span className='text-danger'>Task - </span>
                            {props.task.task.title}
                            <button className='btn btn-warning m-2 float-right' >
                                <i className='fa fa-edit'></i>
                            </button>
                            <button className='btn btn-danger m-2 float-right' onClick={()=>{handleDelete(props.task.id)}} >
                                <i className='fa fa-trash'></i>
                            </button>
                        </h3>
                    </div>
                    <div className="card-body">
                        <p>
                            {props.task.task.description}
                        </p>
                    </div>
                    <div className="card-footer">
                        ID : {props.task.id}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Task