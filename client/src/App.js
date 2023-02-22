import { Route, Routes } from "react-router-dom";
import './App.css';
import Post from './components/Post/Post';
import Layout from "./components/Layout.js/Loyout";

function App() {
  return (

    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Post />} />
        <Route path={'/login'} element={<div>Hello</div>} />
        <Route path={'/register'} element={<div>hi</div>} />

      </Route>

    </Routes>

  );
}

export default App;
