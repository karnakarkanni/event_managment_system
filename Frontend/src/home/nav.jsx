import { Link } from "react-router-dom";

function Nav({ isLoggedIn, handleLogout }) {
  return (
    <>
      <nav>
        <div id="nav">
            <ul id="k">
                <img src="https://www.svgrepo.com/show/414725/peace-earth-global.svg" alt="" style={{width:40,height:30}} />

            </ul>
          <ul id="k">
            <Link to={"/home"} id="link">Home</Link>
          </ul>
          <ul id="k">
            <Link to={"/service"} id="link">Events</Link>
          </ul>
          <ul id="k">
            <Link to={"/about"} id="link">About us</Link>
          </ul>
          {/* <ul id="k">
            <Link to={"/foot"} id="link">Address</Link>
          </ul> */}
          <ul id="k">
            {isLoggedIn ? (
              <span 
                id="link" 
                style={{ cursor: "pointer" }} 
                onClick={handleLogout}
              >
                logout
              </span>
            ) : (
              <Link to={"/"} id="link">Login</Link>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
