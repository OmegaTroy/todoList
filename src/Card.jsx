function Card({tarea}) {
return (
    <div>
        <h1>{tarea.title}</h1>
        <h2>{tarea.description}</h2>
        <p>{tarea.id}</p>
    </div>  
);
}

export default Card;
