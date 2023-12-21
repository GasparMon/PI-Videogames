import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";
import Login from './components/Login';
import { useEffect, useState } from 'react';
import Submit from './components/submit';
import NavBar from './components/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './redux/actions';
import Form from './components/Form';
import Cards from './components/Cards';
import Detail from './components/Detail';



function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const[access,setAccess] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state)=> state.userData);

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const logIn = async (userData) => {

    const { email, password } = userData;

    try {
      const response = await axios.post('http://localhost:3001/mygameroomapp/login',{email, password});
      const{data} = response
    
      if (data.user) {
        const{user} = data
        const{username, avatar} = user
        dispatch(getUser({username, avatar}))
        setAccess(true);
        navigate("/home");
      } else {
        alert("Email o contraseña inválidos");
      }
    } catch {
      alert("Error en tus credenciales, vuelve a intentarlo");
    }
  };


  return (
    <div className="App">
      {!(location.pathname === "/" || location.pathname === "/submit") && <NavBar />}
      <Routes>
        <Route path="/" element={<Login logIn = {logIn}/>} />
        <Route path="/submit" element = {<Submit/>}/>
        <Route path="/home" element={<Cards/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;