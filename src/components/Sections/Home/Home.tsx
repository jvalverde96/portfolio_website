import Data from './Data'
import './home.css'
import MyPhoto from './MyPhoto'

const Home = () => {
  return (
    <section className="section background_primary" id="home">
      <div className="container">
        <div className="home_content">
          <Data />
          <MyPhoto />
        </div>
      </div>
    </section>
  )
}

export default Home
