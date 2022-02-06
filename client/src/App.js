import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./components/Theme";
import LoginForm from "./components/login/LoginForm";
import RegisterForm from "./components/register/RegisterForm";
import Home from "./components/dashboard/Home";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
      </Routes>
    </div>
  );
}

export default App;
