import './App.scss'

import { Main } from "./components/Main/Main"
import { Header, HeaderProp} from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { Navbar } from "./components/Navbar/Navbar"
 
function App() {
  
  return (
  <>
 
  
  <Navbar/>
  {/* <Header headerText="Props er cool"/> */}
  <HeaderProp headerText="Props er cool"/>
  
  <Main/>
  <Footer/>
  </>
  )
}

export default App
