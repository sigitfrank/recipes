import Modal from './screens/auth/Modal'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes/Routes'
import AppProvider from './context/AppProvider'
function App() {
  return (<>
    <BrowserRouter>
      <AppProvider>
        <div className="App pb-5">
          <Routes />
        </div>
        <Modal />
      </AppProvider>
    </BrowserRouter>
  </>)
}

export default App
