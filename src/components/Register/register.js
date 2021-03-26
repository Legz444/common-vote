import '../LogInForm/login.css';

export default function RegisterForm () {
    return(
        <>
        <form className="form-signin">
            <h1 className="h3 mb-3 fw-normal">Welcome to Common Vote. Please Register Below</h1>

            <div className="form-floating">
                <input type="text" className="form-control" id="floatingInput" placeholder="First name"/>
                <label HTMLfor="floatingInput">First Name</label>
            </div>
            <div className="form-floating">
                <input type="text" className="form-control" id="floatingInput" placeholder="Last name"/>
                <label HTMLfor="floatingInput">Last Name</label>
            </div>
            <div className="form-floating">
                <input type="date" className="form-control" id="floatingInput"/>
                <label HTMLfor="floatingInput">Age</label>
            </div>
            <div className="form-floating">
                <input type="radio" className="form-control"/>
                <label>Registered to Vote?</label>
            </div>
            <div className="form-floating">
                <p>Affiliated Party</p>
                <input type="radio" className="form-control"/>
                <label>Democrat</label>
                <input type="radio" className="form-control"/>
                <label>Green Party</label>
                <input type="radio" className="form-control"/>
                <label>Independant</label>
                <input type="radio" className="form-control"/>
                <label>Libertarian</label>
                <input type="radio" className="form-control"/>
                <label>Republican</label>
                <input type="radio" className="form-control"/>
                <label>Other</label>
            </div>
            <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label HTMLfor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label HTMLfor="floatingPassword">Password</label>
            </div>

            <button class="w-100 btn btn-lg btn-primary" type="submit">Start Voting</button>
                
        </form>
        </>
    )
}