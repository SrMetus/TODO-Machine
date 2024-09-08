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
        {isLoading && <p>Estamos cargando...</p>}
        {isError && <p>Hubo un error...</p>}
        {(!isLoading && searchedTodos.length === 0) && <p>Crea tu primer TODO!</p>}

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
