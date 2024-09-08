
import { useState } from 'react';
import { TodoButton } from './components/TodoButton';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';

// const defaultTodos = [ 
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Llorar con la Llorona', completed: false},
//   {text: 'Tomar agua', completed: true},
//   {text: 'Hacer la cena', completed: true},
//   {text: 'Aprender React.js', completed: false},
// ]
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)); 

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1')
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]))
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos)
  }
  
  const [todos, setTodos] = useState(parsedTodos)
  const [searchValue, setSearchValue] = useState('')

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => 
    todo.text.toLowerCase().includes(searchValue.toLowerCase()))

  const saveTodos = newTodos => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    setTodos(newTodos)
  }

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      todo => todo.text === text
    )
    newTodos[todoIndex].completed = true
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const delTodos = [...todos]
    const todoIndex = delTodos.findIndex(
      todo => todo.text === text
    )
    delTodos.splice(todoIndex, 1)
    saveTodos(delTodos);
  }

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
  );
}

export default App;
