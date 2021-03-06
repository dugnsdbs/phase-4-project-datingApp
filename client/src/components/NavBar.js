
import { NavLink } from "react-router-dom";


function NavBar ({ user, matches }){

    return (
        <div id="nav">
        {user ? <div>
        <NavLink
         to="/"
         exact
        >
            <button type="button" className="btn btn-outline-light">Home Page</button>
        </NavLink>
        <NavLink
        to="/matches" 
        exact
        >
            <button type="button" className="btn btn-outline-light">Matches ({matches.length})</button>
        </NavLink>
        <NavLink
            to="/myProfile"
            exact>
                <button type="button" className="btn btn-outline-light">My Profile</button>
            </NavLink>
        </div> : null }
        </div>
    )
}

export default NavBar;