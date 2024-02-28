import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importe BrowserRouter
import Welcome from './Pages/Welcome'
import Portfolio from './Pages/Portfolio'
import PasseioDetalhe from './Pages/PasseioDetalhe'

function App() {

  return (
    <>
      <Router>
            
            <Routes>
                <Route path="/" component={Welcome} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/passeio" component={PasseioDetalhe} />
            </Routes>
        </Router>
    </>
  )
}

export default App
