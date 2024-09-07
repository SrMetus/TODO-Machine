
import { TodoButton } from './components/TodoButton';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <TodoButton />

    </div>
  );
}

export default App;
