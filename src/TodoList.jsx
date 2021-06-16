import { useState } from "react";

export const TodoList = () => {
    const initialState = [
        {
            task: 'Learn JavaScript',
            isCompleted: false
        },
        {
            task: 'Learn React Hooks',
            isCompleted: false
        },
        {
            task: 'Learn React State',
            isCompleted: false
        }
    ]

    const [todos, setTodo] = useState(initialState)

    const [task, setTask] = useState('')
    
    const handleNewTask = (event) => {
        setTask(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(task === '') 
        return
        setTodo(todos => [...todos,{ task, isCompleted: false}])
    }

    const handleRemoveTask = index => {
        const newTodos = [...todos].filter((todo,todoIndex) => todoIndex !== index);
        setTodo(newTodos)
    }

    return(
        <div>
            <h1>Todo Sample App</h1>
            {/*タスクをリストに保存するためにFormタグの設定 Enterを押すとhandleSubmitが実行*/}
            <form onSubmit= {handleSubmit} >
            {/* ラベルフォームの表示 inputタグに入力した値を取得、onChangeイベントを設定し、value属性の値に追加したタスクを指定する　*/}
            Add Task : <input value = { task } placeholder = "Add New Task" onChange = {handleNewTask} />
            </form>
            {/* タスクリストの表示 */}
            <ul>
                { todos.map((todo, index) => (
                    <li key = { index } 
                    style = { todo.isCompleted === true ? {textDecorationLine: 'line-through'}:{}}
                    > 
                    {todo.task} <span onClick = { () => 
                    handleRemoveTask(index) } > × </span></li>
                ))}
            </ul>
        </div>

    );

} 
export default TodoList;