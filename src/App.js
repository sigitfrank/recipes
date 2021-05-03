
import './css/navbar.css'
import './css/main-header.css'
import './css/content.css'
import Modal from './screens/auth/Modal'
import Navbar from './components/Navbar'
import Routes from './routes/Routes'
function App() {
  return (<>
    <div className="App pb-5">
      <Navbar/>
      <Routes/>
    </div>
    <Modal />
  </>)
}

export default App
