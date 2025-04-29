import {Outlet} from "react-router-dom";
import module from './App.module.css';

function App() {

  return (
    <div className={module.app}>
        <h1>Localize perfils do GitHub</h1>
        <Outlet/>
    </div>
  )
}

export default App
