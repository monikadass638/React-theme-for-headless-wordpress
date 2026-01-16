
import BlogList from "./pages/BlogList";
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom";


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<BlogList />}></Route>

      </Routes>





    </>
  )
}

export default App
