import './App.css';
import { FileTreeView } from './components/FileTree';
import { FileSearch } from './components/FileSearch';
import { data } from './utils/data';

function App() {
  return (
    <div className="App">
      <FileSearch />
      <FileTreeView items={data} />
    </div>
  );
}


export default App