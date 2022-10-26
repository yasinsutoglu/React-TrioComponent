
import React, { useEffect, useState } from 'react'
import TodoList from './TodoList';
import axios from "axios"

const SearchTodo = () => {

const [input,setInput] = useState("");
const [todos, setTodos] = useState([]);
let arr = [];

const getTodos = async (id="")=>{

    const url = "https://6351820bdfe45bbd55c21aba.mockapi.io/api/todos";
    
    try {
        const {data}  = await axios.get(`${url}/${id}`);
        
        if (Array.isArray(data)){
            setTodos(data);
        }else{
            arr.push(data)
            setTodos(arr)
        }
        

    } catch (error) {
        console.log(error);
    }    
}

const handleSearch = (e)=>{
    e.preventDefault();

    if(input){
        const filtered = todos.filter((todo) => todo.subject === input);
        console.log(filtered);
        if(filtered.length === 0){
            alert("The searched subject cannot be found")
        }else{
            getTodos(filtered[0]?.id);
        }        
    }else{
        alert("please enter a subject to search")
    }   
        
}


useEffect(() => {
   getTodos() 
}, [input])



  return (
    <div className='container p-2 text-center mt-2'>
        <form onSubmit={handleSearch} className='search-div'>
            <div>
                <label htmlFor="search" className='text-danger display-5'>Search Your Todo:</label> <br /><br />
                <input type="search" name="search" id="search"  className='form-control' onChange={(e)=>setInput(e.target.value)} />
            </div>
            <div className='my-3'>
                <button type="submit" className='btn btn-danger w-50'>Search Submit</button>
            </div>
        </form>
        
        <TodoList todos={todos} setTodos={setTodos} getTodos={getTodos}/>
    </div>
  )
}

export default SearchTodo;