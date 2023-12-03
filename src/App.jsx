import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css'
// import Section1 from './components/Section1'
// import Section2 from './components/Section2'
// import Section3 from './components/Section3'
// import Section4 from './components/Section4'
// import Section5 from './components/Section5'
// import Section6 from './components/Section6'
// import Section7 from './components/Section7'
// import Section8 from './components/Section8'
import MainLayout from "./layout/MainLayout";
import About from "./pages/About/about";
import Home from "./pages/Home";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
      {/* <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 /> */}
    </>
  )
}

export default App
