'use client'
import {useState} from 'react'
export default function Page () {
    return <div>hello</div>
}

interface TodoItem  {
    id:string;
    content:string;
    isDone:boolean
}

const Hi = () => {
    const [state , setState] = useState<TodoItem[]>([])
    return <div>
        {
            state.map(item => (
                <Todo key={item.id
                } todo={item}/>
            ))
        }
    </div>
}

const Todo = (props:{todo:TodoItem}) => {
    return <div>{props.todo.id}</div>
}