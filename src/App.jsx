import Aside from "./components/Aside/Aside"
import Content from "./components/Content"
import Footer from "./components/Footer"
import Header from "./components/Header/Header"


function App() {

  return (
    <div className="wrapper">
      <Header/>
      <Content/>
      <Aside/>
      <Footer/>
    </div>
  )
}

export default App
