import Link from 'next/link'

const Index = () => (
    <div>
        <ul>
            <li><Link href='/'><a>Home</a></Link></li>
            <li><Link href='/0_route'><a>Route</a></Link></li>
        </ul>
        <h1>Hello World!</h1>
    </div>
)

export default Index