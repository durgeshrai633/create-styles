import { Route, Routes } from "react-router-dom";
import "./App.css";
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Text from "./components/Text/Text";

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/text' element={<Text></Text>}></Route>
        <Route path='/button' element={<Button></Button>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
