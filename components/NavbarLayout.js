import Link from 'next/link'

const Navbar = () => (
    <div>
        <ul>
            <li><Link href='/'><a>Home</a></Link></li>
            <li><Link href='/4_routelayout'><a>Route</a></Link></li>
        </ul>

        <style jsx>{`
            li {
                color: black;
                background-color: yellow;
            }
        `}</style>
    </div>
)

export default Navbar