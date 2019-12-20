import Navbar from './NavbarLayout'

const Layout = (props) => (
    <div>
        <Navbar/>
        {props.children}
    </div>
)

export default Layout