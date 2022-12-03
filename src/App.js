import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Components/Login/Login';
import SignUp from "./Components/SignUp/SignUp"
import HomePage from "./Components/HomePage/HomePage"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Login/>}/>
          <Route path = "/signup" element = {<SignUp/>}/>
          <Route path = "/homepage" element = {<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
