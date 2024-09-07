
import { useState } from 'react';
import { TodoButton } from './components/TodoButton';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';

const defaultTodos = [ 
  {text: 'Cortar cebolla', completed: true},
  {text: 'Llorar con la Llorona', completed: false},
  {text: 'Tomar agua', completed: true},
  {text: 'Hacer la cena', completed: true},
  {text: 'Aprender React.js', completed: false},
]
function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => 
    todo.text.toLowerCase().includes(searchValue.toLowerCase()));

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      todo => todo.text === text
    )
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
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
          />
        ))}
      </TodoList>

      <TodoButton />
    </>
  );
}

export default App;
