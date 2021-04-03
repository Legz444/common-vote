import '../LogInForm/login.css';

export default function RegisterForm (props) {
    return(
        <>
        <img className="mb-4" src="https://res.cloudinary.com/legz444/image/upload/v1616790789/Common_2_axarsa.png" alt="" width="72" height="72"/>
        <form className="form-signin">
            <h1 className="h3 mb-3 fw-normal">Welcome to Common Vote. Please Register Below</h1>

            <div className="form-floating">
                <input type="text" className="form-control" id="floatingInput" placeholder="First name" name="firstName" onChange={props.handleInput}/>
                <label htmlFor="floatingInput">First Name</label>
            </div>
            <div className="form-floating">
                <input type="text" className="form-control" id="floatingInput" placeholder="Last name" name="lastName" onChange={props.handleInput}/>
                <label htmlFor="floatingInput">Last Name</label>
            </div>
            <div className="form-floating">
                <input type="date" className="form-control" id="floatingInput" name="dob" onChange={props.handleInput}/>
                <label htmlFor="floatingInput">Date Of Birth</label>
            </div>
            <div className="form-floating">
                <input type="radio" className="form-control" name="isRegistered" onChange={props.handleInput}/>
                <label>Registered to Vote?</label>
            </div>
            <div className="form-floating">
                <p>Affiliated Party</p>
                <input type="radio" className="form-control" name="party" onChange={props.handleInput}/>
                <label>Democrat</label>
                <input type="radio" className="form-control" name="party" onChange={props.handleInput}/>
                <label>Green Party</label>
                <input type="radio" className="form-control" name="party" onChange={props.handleInput}/>
                <label>Independant</label>
                <input type="radio" className="form-control" name="party" onChange={props.handleInput}/>
                <label>Libertarian</label>
                <input type="radio" className="form-control" name="party" onChange={props.handleInput}/>
                <label>Republican</label>
                <input type="radio" className="form-control" name="party" onChange={props.handleInput}/>
                <label>Other</label>
            </div>
            <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" name="email" placeholder="name@example.com" onChange={props.handleInput}/>
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" onChange={props.handleInput}/>
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={props.handleRegister}>Start Voting</button>
                
        </form>
        </>
    )
}