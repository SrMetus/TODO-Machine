
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

const useLocalStorage = (itemName, initialValue) => {
  const localStorageItem = localStorage.getItem(itemName)
  let parseditem;
  
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify([initialValue]))
    parseditem = [initialValue];
  } else {
    parseditem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = useState(parseditem);

  const saveItem = newItem => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }
  return [item, saveItem]
}

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = useState('')

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => 
    todo.text.toLowerCase().includes(searchValue.toLowerCase()))

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
