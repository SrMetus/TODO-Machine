import { TodoButton } from './TodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';

export const AppUi = ({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) => {
    
  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos}/>
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(({text, completed}) => (
          <TodoItem 
            key={text}
            text={text}
            completed={completed}
            onComplete={() => completeTodo(text)}
            onDelete={deleteTodo}
          />
        ))}
      </TodoList>

      <TodoButton />
    </>
  )
}
