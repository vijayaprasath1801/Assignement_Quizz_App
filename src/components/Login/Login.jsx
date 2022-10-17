import { useNavigate } from "react-router-dom";
import '../Login/Login.styles.css';


function Login() {
   const navigate = useNavigate();
  const navHandler =(e)=>{
    e.preventDefault();
    navigate('/qpage');
    }

  return (
    <div className="login-bg">
    <form className='form_login' onSubmit={navHandler}>
    <div className="container">
    <div className="text-con">
    <h1>Quizz Time</h1>
    <span>Login To Take Your Quizz</span>
    </div>
    <label>Name</label>
      <input type='text' name="uname" placeholder="Enter Your Name" required></input>
      <label>Email</label>
      <input type='email' name="email" placeholder="Email" required></input>
      <label>Password</label>
      <input  type='password' name="password" placeholder="Password" required></input>
      <button className='btn' type="submit">Submit</button>
      </div>
    </form>
    </div>
  )
}

export default Login;