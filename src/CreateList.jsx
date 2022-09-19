import { useState } from "react";


const CreateList = ({createTarea}) => {
const [title,setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        createTarea(title);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Escribe una tarea" onChange={(e)=>setTitle(e.target.value)}/>
            <button>Click</button>
        </form>
    )
}

export default CreateList