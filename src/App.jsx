
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Modal from './components/modal/modal'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Modal />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
