import './App.css'

import {BrowserRouter as Router, Routes, Route, Link, Outlet} from "react-router-dom";
import Ex_00 from "./views/ex_00.jsx";
import Ex_01 from "./views/ex_01.jsx";
import Ex_02 from "./views/ex_02.jsx";
import Ex_03 from "./views/ex_03.jsx";

function Header() {
    return (
        <>
            <header style={{display: 'flex', gap: '50px', fontSize: '2vw' }}>
                <Link to={"/0"}>EX 0</Link>
                <Link to={"/1"}>EX 1</Link>
                <Link to={"/2"}>EX 2</Link>
                <Link to={"/3"}>EX 3</Link>
            </header>

            <div style={{ fontSize: '2vw', display: 'flex', justifyContent: 'center', marginTop: '5vw' }}>
                <Outlet/>
            </div>
        </>
    )
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path={""} element={<Header/>}>
                    <Route path={"/0"} element={ <Ex_00/> } />
                    <Route path={"/1"} element={ <Ex_01/> } />
                    <Route path={"/2"} element={ <Ex_02/> } />
                    <Route path={"/3"} element={ <Ex_03/> } />
              </Route>
          </Routes>
      </Router>
  )
}

export default App
