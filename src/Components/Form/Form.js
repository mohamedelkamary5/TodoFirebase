import React, { useState } from 'react'
import firebase from './../../Config/Config'
// import * as firebase from 'firebase/app'
export default function Form() {





    const [title, setTitle] = useState('')
    const [age, setAge] = useState('')

   

    const handleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleChange2 = (e) => {
        setAge(e.target.value)
    }

    const createTodo = () => {
        const todoRef = firebase.database().ref("Todo")
        const todo = {                        
            title,
            age,
            complate: false
        };
        todoRef.push(todo)
    }
    return ( 
        <div>
            <input type='text' onChange={handleChange} value={title} />  
            <input type='text' onChange={handleChange2} value={age} />            
            <button onClick={createTodo}>Add ToDo</button>
        </div>
    )
}
