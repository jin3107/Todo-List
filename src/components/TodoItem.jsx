import '../index.css';

function TodoItem({ text, onDelete }) {
    return (
        <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {text}
            <button className="button" onClick={onDelete}>Delete</button>
        </li>
    )
}

export default TodoItem;