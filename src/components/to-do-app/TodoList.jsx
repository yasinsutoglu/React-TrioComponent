import React, { useState } from 'react'
import {FaEdit} from "react-icons/fa"
import { AiFillDelete } from "react-icons/ai";
import axios from "axios"
import EditTodo from './EditTodo';
import {BsCheck2All} from "react-icons/bs"

const TodoList = ({todos,setTodos,getTodos}) => {
    
    // console.log(todos.length);

    const [editId, setEditId] = useState(0)
    const [subj, setSubj] = useState("")
    const [editDate, setEditDate] = useState("")
    const [done, setDone] = useState(false)



const deleteTodo = async (id)=>{   
    const url = "https://6351820bdfe45bbd55c21aba.mockapi.io/api/todos";
    try {
        await axios.delete(`${url}/${id}`);
    } catch (error) {
        console.log(error);
    }
    getTodos()
}

const putTodo = async (id, sub , date)=>{
    const url = "https://6351820bdfe45bbd55c21aba.mockapi.io/api/todos";
    try {
        await axios.put(`${url}/${id}`, { "subject": sub  , "endDate": date })
    } catch (error) {
        console.log(error)
    }
    getTodos()
}


  return (
    <div className='toDoScroll'>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Check</th>
            <th scope="col">Subject</th>
            <th scope="col">Due Date</th>
            <th scope="col">Edit&Remove</th>
          </tr>
        </thead>
        <tbody className="table table-striped" >
          {todos.map((todo) => {
            let { subject, endDate, id , isCompleted} = todo;
            return (
              <tr key={id} id={id}>
                <td>
                   <BsCheck2All size={40} type="button" className="me-2 text-success" onClick={(e)=> {
                setDone(!done)
                console.log(e.target.parentElement.closest("tr"));
                 done ? e.target.parentElement.closest("tr").className="" : e.target.parentElement.closest("tr").classList.add("text-decoration-line-through")
                }}/>
                </td>
                <td>{subject}</td>
                <td>{endDate}</td>
                <td>
                  <FaEdit
                    size={40}
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#edit-modal"
                    className="me-2 text-warning"
                    onClick={() => {
                      setEditId(id);
                      setSubj(subject);
                      setEditDate(endDate);
                    }}
                  />
                  <AiFillDelete
                    size={40}
                    type="button"
                    className="text-danger"
                    onClick={() => deleteTodo(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <EditTodo
        editId={editId}
        editDate={editDate}
        subj={subj}
        setEditId={setEditId}
        setEditDate={setEditDate}
        setSubj={setSubj}
        putTodo={putTodo}
      />
    </div>
  );
}

export default TodoList