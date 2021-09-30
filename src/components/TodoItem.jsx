import React from 'react'

export function TodoItem({ todo }) {
    const { id, task, completed } = todo; // destructuring
    return (
            <li>{task}</li>
    )
}
