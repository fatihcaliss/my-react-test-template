import { useState } from 'react'

const defaultItems = [
    {
        name: "Item A",
    },
    {
        name: "Item B",
    },
    {
        name: "Item C",
    }
]



const Todo = () => {
    const [text, setText] = useState("");
    const [items, setItems] = useState(defaultItems)

    const addItem = () => {
        setItems((prev) => [...prev, { name: text }]);
        setText("");
    }

    return (
        <div>
            <label >
                Text
                <input value={text} onChange={(e) => setText(e.target.value)} />

            </label>
            <button onClick={addItem} >Add</button>

            <br />
            <br />
            {items.map((e,i) => {
                return <h1 key={i}>{e.name}</h1>
            })}
        </div>
    )
}

export default Todo