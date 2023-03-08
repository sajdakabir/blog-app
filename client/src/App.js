import { Route, Routes } from "react-router-dom";
import './App.css';
import Layout from "./components/Layout.js/Loyout";
import { UserContextProvider } from "./context/UserContext";
import CreatePost from "./pages/CreatePost";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (

    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<IndexPage />} />
          <Route path={'/login'} element={<LoginPage />} />
          <Route path={'/register'} element={<RegisterPage />} />
          <Route path={'/create'} element={<CreatePost/>} />
        </Route>

      </Routes>
    </UserContextProvider>


  );
}

export default App;
