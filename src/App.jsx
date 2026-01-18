
import AboutUs from "./pages/AboutUs";
import BlogList from "./pages/BlogList";
import BlogSingle from "./pages/BlogSingle";
import Categories from "./pages/Categories";
import CategorySingle from "./pages/CategorySingle";

import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom";


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<BlogList />}></Route>
        <Route path="/blog/:slug" element={<BlogSingle />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>
        <Route path="/category/:slug" element={<CategorySingle />}></Route>

      </Routes>





    </>
  )
}

export default App
