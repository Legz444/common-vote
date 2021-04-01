import './login.css';

export default function LogInForm () {
    return(
        <form className="form-signin">
            <img className="m-auto" src="https://res.cloudinary.com/legz444/image/upload/v1616790789/Common_2_axarsa.png" alt="" width="80" height="80"/>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label htmlFor="floatingPassword">Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <a href="/register">Need to Sign Up?</a>
        </form>

    )
}