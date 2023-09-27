import Link from "next/link";
import Router, { useRouter } from "next/router";

function Menu() {
  const router = useRouter();
  const pathName = router.route.replace('/', '');

  const routeNames = [
    {
        displayName: 'Home',
        name: 'home',
        path: '/'
    },
    {
        displayName: 'Blog',
        name: 'blog',
        path: '/blog'
    },
    {
        displayName: 'Projects',
        name: 'projects',
        path: '/projects'
    },
  ]

  const renderPaths = (path) => {
    return (
        <li >
            <Link href={path.path} className={pathName === path.name ? 'active' : ''}>
                {path.displayName}
            </Link>
        </li>
    )
  }


  return (
    <nav className="nav">
        <ul>
            {routeNames.map(path => renderPaths(path))}
        </ul>
    </nav>
  )
}
export default Menu