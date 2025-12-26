import './App.css'
import Home from './page/Home.jsx';

// theme context
import { ThemeProvider } from './context/ThemeContext.jsx';

// bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </>
  )
}

export default App