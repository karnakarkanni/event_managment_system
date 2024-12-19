import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../../src/login.css"


function Customer({ setIsLoggedIn }) {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("https://event-managment-system-4tvs.onrender.com/register")
            .then((res) => setUsers(res.data))
            .catch((error) => console.error("Error fetching users data:", error));
    }, []);

    const userLogin = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        console.log(email,password)

        const foundUser = users.find(user => user.email === email && user.password === password);
        const foundUser1 = users.find(user => user.email === email);

        if (foundUser) {
            localStorage.setItem("isLoggedIn", "true");
            setIsLoggedIn(true);
            navigate("/home");
        } else if (email === "karnakarmaratikanni@gmail.com" && password === "123") {
            localStorage.setItem("isLoggedIn", "true");
            setIsLoggedIn(true);
            navigate("/admin");
            console.log("hello")
        } else if (foundUser1) {
            alert("Password is incorrect");
        } else {
            alert("Please register");
        }
    };

    const guestLogin = () => {
        localStorage.setItem("isLoggedIn", "true");
        setIsLoggedIn(true);
        navigate("/home");
    };

    return (
        <div className="wrapper">
            <div className="container">
                <div className="col-left">
                    <div className="login-text">
                        <h2>Logo</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget eros dapibus, ultricies tellus vitae, consectetur tortor.
                        </p>
                    </div>
                </div>
                <div className="col-right">
                    <div className="login-form">
                        <h2>Login</h2>
                        <form onSubmit={userLogin}>
                            <p>
                                <input type="email" placeholder="Email"  />
                            </p>
                            <p>
                                <input type="password" placeholder="Password" />
                            </p>
                            <p>
                                <input className="btn" type="submit" value="Sign In" />
                            </p>
                            <p>
                                <Link to="/Registration">Create an account.</Link>
                            </p>
                        </form>
                        <span onClick={guestLogin} style={{ cursor: "pointer", color: "blue" }}>
                            Login as a Guest
                        </span>
                    </div>
                </div>
            </div>
           
        </div>
    );
}

export default Customer;
