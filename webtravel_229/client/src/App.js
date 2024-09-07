import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Settings from "./pages/settings/Settings";
import SinglePage from "./pages/SinglePage/SinglePage";
import Write from "./pages/write/Write";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { Context } from "./context/Context";
import Users from "./pages/users/Users";

function App() {
  const { user } = useContext(Context);

  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route path="/users" element={user ? <Users /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Login />} />
        <Route exact path="/post/:postId" element={<SinglePage />} />
      </Routes>
    </Router>
  );
}

export default App;
