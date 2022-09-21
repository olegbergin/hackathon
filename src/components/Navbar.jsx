import { useDispatch } from "react-redux";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { logOut } from "../store/userSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
      עיריית דימונה
      </Link>
      <ul>
        <CustomLink to="/Home">דף בית</CustomLink>
        <CustomLink to="/Benifits">הטבות לעובדים</CustomLink>
        <CustomLink to="/Contacts">אנשי קשר</CustomLink>
        <button key={0} onClick={()=>dispatch( logOut() )}>LogOut</button>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}