export const TodoItem = ({text, onComplete}) => {
  return (
    <div>
        <span onClick={onComplete}>✅</span>
        <h2>{text}</h2>
        <span>❌</span>
    </div>
  )
}
