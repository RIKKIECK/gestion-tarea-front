import { Routes, Route, BrowserRouter} from 'react-router-dom';
import ShowTasks from './components/ShowTasks';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowTasks></ShowTasks>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
