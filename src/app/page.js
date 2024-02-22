"use client"

import Service from "@/components/Service"
import Todo from "@/components/Todo"
import { useState } from "react"

export default function Home() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn Javascript", done: true },
    { id: 2, title: "Learn React", done: false },
    { id: 3, title: "Build a React App", done: true },
  ])




  const [search, setSearch] = useState("")

  const [state, SetState] = useState("all")

  const [title, setTitle] = useState("")

  const SetSearchText = (text) => {
    setSearch(text)
  }

  const SetSearchNull = () => {
    setSearch("");
  }

  const SearchTodos = todos.filter((todo) => {
    if (todo.title.toLowerCase().includes(search.toLocaleLowerCase())) {
      return todo
    }
  })

  const handleState = (state) => {
    SetState(state)

  }

  const activeTodos = todos.filter((todo) => {
    if (!todo.done) {
      return todo
    }
  })

  const completedTodos = todos.filter((todo) => {
    if (todo.done) {
      return todo
    }
  })


  const handleUpdate = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          id: id,
          title: todo.title,
          done: true
        }

      }
      else {
        return todo
      }

    })
    setTodos(updatedTodos);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = Date.now();
    setTodos((old) => [...old, { id, title, done: false }]);
    setTitle("");

  }

  return <main className="flex  h-screen items-center justify-center ">
    <div className=" flex flex-col items-center justify-center gap-3 w-[500px]">
      <h1 className="text-4xl font-bold ">THINGS TO DO</h1>
      <form onSubmit={(e) => handleSubmit(e)} className=" w-full px-4 flex flex-col items-center gap-2">
        <input value={title} onChange={(e) => setTitle(e.target.value)} className="border-2 w-full p-2" type="text" placeholder="Add new" />
        <button className="bg-blue-500 text-white font-semibold rounded-md px-2 py-1" type="submit">Submit</button>
      </form>

      {
        search ? <div className=" w-full px-4">{

          SearchTodos.map((todo) => (<Todo key={todo.id} todo={todo} handleUpdate={handleUpdate} />))
        }
        </div> : <div className=" w-full px-4" >
          {
            state == "all" && todos.map((todo) => (
              <Todo key={todo.id} todo={todo} handleUpdate={handleUpdate} />
            ))
          }
          {
            state == "active" && activeTodos.map((todo) => (
              <Todo key={todo.id} todo={todo} handleUpdate={handleUpdate} />
            ))
          }
          {
            state == "complete" && completedTodos.map((todo) => (
              <Todo key={todo.id} todo={todo} handleUpdate={handleUpdate} />
            ))
          }
        </div>
      }
      {/* <div className=" w-full px-4" >
        {
          state == "all" && todos.map((todo) => (
            <Todo key={todo.id} todo={todo} handleUpdate={handleUpdate} />
          ))
        }
        {
          state == "active" && activeTodos.map((todo) => (
            <Todo key={todo.id} todo={todo} handleUpdate={handleUpdate} />
          ))
        }
        {
          state == "complete" && completedTodos.map((todo) => (
            <Todo key={todo.id} todo={todo} handleUpdate={handleUpdate} />
          ))
        }
      </div> */}
      <Service handleState={handleState} setSearchNull={SetSearchNull} search={search} setSearch={SetSearchText} />
    </div>
  </main>
}