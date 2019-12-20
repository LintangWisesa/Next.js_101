import Link from 'next/link'

const Navbar = () => (
    <div>
        <ul>
            <li><Link href='/'><a>Home</a></Link></li>
            <li><Link href='/0_route'><a>Route</a></Link></li>
        </ul>
    </div>
)

export default Navbar