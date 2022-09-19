import Card from "./Card";

const TodoList = ({ tareas }) => {
return (
    <div>
        {tareas.map((tarea) => (
        <Card key={tarea.id} tarea={tarea} />
    ))}
    </div>
);
};

export default TodoList;
