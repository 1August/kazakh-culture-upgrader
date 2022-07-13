import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route, } from "react-router-dom";

import './App.css'
import StartPage from "./pages/StartPage/StartPage";



function App() {
  return (
    <div className='App'>
      <StartPage />
  {/* <BrowserRouter>
    <Modal />
    <Header />
    <Routes>
        {/* <Route path="/" element={< />}>
        <Route index element={<HomePage />} /> */}
      {/* </Route> */}
    {/* </Routes> */}
  {/* </BrowserRouter> */} 
    </div>
  )
}

export default App