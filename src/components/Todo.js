"use client"


function Todo({ todo, handleUpdate }) {
    return (
        <div onClick={() => handleUpdate(todo.id)} className={`flex gap-2 border-b-2 pb-2 my-2 ${todo.done ? "cursor-not-allowed" : "cursor-pointer"}`}  >
            <input className={todo.done ? "cursor-not-allowed" : "cursor-pointer"} type="checkbox" checked={todo.done} readOnly />
            <p className="">{todo.title}</p>
        </div>
    )
}

export default Todo
