export const TodoItem = ({text, onComplete, onDelete}) => {
  return (
    <div>
        <span onClick={onComplete}>✅</span>
        <h2>{text}</h2>
        <span onClick={onDelete}>❌</span>
    </div>
  )
}
