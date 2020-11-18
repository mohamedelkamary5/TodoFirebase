import React from 'react'
import firebase from '../../Config/Config'
export default function Todo({ todo }) {
    const deleteTodo = () => {
        const todoRef = firebase.database().ref('Todo').child(todo.id);
        todoRef.remove(); 
    };
    const complateTodo = () => {
        const todoRef = firebase.database().ref('Todo').child(todo.id);
        todoRef.update({
            complate: !todo.complate
        })

    }
    return (
        <div >
            <h2 className={todo.complate ? 'complate': ""}>{todo.title} - {todo.age}</h2>
            <button onClick={deleteTodo}>Delete</button>
            <button  onClick={complateTodo}>Complate</button>
        </div>
    )
}

