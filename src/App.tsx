import "./styles/main.css";

import { TasksProvider } from "./contexts/Tasks";
import { Header } from "./components/Header";
import { List } from "./components/List";

function App() {
  return (
    <TasksProvider>
      <div className="bg-slate-900 min-h-screen text-slate-50">
        <Header />
        <List />
      </div>
    </TasksProvider>
  );
}

export default App;
