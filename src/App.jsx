import { BrowserRouter, Route, Routes, } from "react-router-dom"
import { NotFound } from "./pages/NotFound"
import { Home } from "./pages/Home"
import { Toaster } from "./components/ui/toaster";
import { PastExp } from "./pages/PastExp";
import { Analytics } from "@vercel/analytics/next"



function App() {


  return (
    <>
    <Toaster/>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/PastExp" element={<PastExp/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Analytics />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
