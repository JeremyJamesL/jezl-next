import Link from "next/link"

function Menu() {
  return (
    <nav className="nav">
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/projects">Projects</Link></li>
        </ul>
    </nav>
  )
}
export default Menu