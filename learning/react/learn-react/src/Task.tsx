export const Task = (props) => {
    return <div style={{display: "block"}}>
            <p style={{textDecorationLine: props.completed ? "line-through" : "none", display: "block"}}>{props.taskName},{props.completed.toString()}</p>
            <button onClick={() => props.deleteTask(props.id)}>X</button>
            <button onClick={() => props.completeTask(props.id)}> Complete </button>
            </div>
}