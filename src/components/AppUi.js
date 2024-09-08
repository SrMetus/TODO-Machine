import { EmptyTodos } from './EmptyTodos';
import { IsError } from './IsError';
import { IsLoading } from './IsLoading';
import { TodoButton } from './TodoButton';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';

export const AppUi = ({
    isLoading,
    isError,
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
        {isLoading && <IsLoading />}
        {isError && <IsError />}
        {(!isLoading && searchedTodos.length === 0) && <EmptyTodos />}

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
