import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Beranda from "./pages/Beranda"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"
import { useState } from "react"

const App = () => {
  const [loginStatus,setLoginStatus] = useState(false)
  const [name,setName] = useState('')

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda loginStatus={loginStatus} name={name}/>}/>
        <Route path="/Register" element={<Register setName={setName}/>}/>
        <Route path="/Login" element={<Login setLoginStatus={setLoginStatus}/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}
export default App