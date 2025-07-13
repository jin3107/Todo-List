import '../index.css';

function TodoItem({ text, onDelete }) {
    return (
        <li style={{ display: 'flex', alignItems: 'center' }}>
            {text}
            <button 
                style={{ marginLeft: 'auto', fontSize: 15, padding: 12, columnGap: 10 }} 
                onClick={onDelete}>
                Delete
            </button>
        </li>
    )
}

export default TodoItem;