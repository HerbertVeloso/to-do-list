import './styles/main.css';

import { Header } from './components/Header'
import { List } from './components/List'

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen text-neutral-50">
      <Header />
      <List />
    </div>
  )
}

export default App
