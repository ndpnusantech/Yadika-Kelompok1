import './style/login.css'

const Login = () =>{
    return (
        <div class='card'>
            <div class='page-1'>
                <img src='./images/cinema.png' class='cinema'></img>
                <h1>Boking your ticket to <br/>
                     watch your favorite  <br/>
                            movie
                </h1>
            </div>
            <div class='page-2'>
                <input type='email' placeholder='Email' class='email' /> <br />
                <input type='password' placeholder='Password' class='password' /> <br/>
                <button type='submit'>Login</button>
                <p>Dont have an account <a href=''>Register Now</a></p>
            </div>
        </div>
    )
}

export default Login