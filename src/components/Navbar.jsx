import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
      עיריית דימונה
      </Link>
      <ul>
        <CustomLink to="/Home">דף בית</CustomLink>
        <CustomLink to="/Benifits">הטבות לעובדים</CustomLink>
        <CustomLink to="/Contacts">אנשי קשר</CustomLink>
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