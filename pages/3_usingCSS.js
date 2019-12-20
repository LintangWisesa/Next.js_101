import Navbar from '../components/Navbar'

const Index = () => (
    <div>
        <Navbar/>
        <h1>Hello World!</h1>

        <style jsx>{`
            h1 {
                color: yellow;
                background-color: red;
            }
        `}</style>
    </div>
)

export default Index