import { BrowserRouter , Route , Routes } from "react-router-dom";
import Layout from "./componets/Layout";
import Home from "./componets/todo-comps/Index";

import WaetherPage from "./componets/weather-comps/WaetherPage";


function App() {
  return (
    <Layout>
   
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/weather" element = {<WaetherPage/>} />
        </Routes>

    </Layout>



  )
}

export default App
