import Modal from './screens/auth/Modal'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/Routes'
function App() {
  return (<>
    <BrowserRouter>
      <div className="App pb-5">
        <Routes />
      </div>
      <Modal />
    </BrowserRouter>
  </>)
}

export default App
