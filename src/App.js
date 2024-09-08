
import { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { AppUi } from './components/AppUi';

// const defaultTodos = [ 
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Llorar con la Llorona', completed: false},
//   {text: 'Tomar agua', completed: true},
//   {text: 'Hacer la cena', completed: true},
//   {text: 'Aprender React.js', completed: false},
// ]
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

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
    <AppUi
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
