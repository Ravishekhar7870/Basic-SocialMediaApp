
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './component/Header'
import Footer from './component/Footer'
import Siderbar from './component/Siderbar'
import { useState } from 'react'
import Showpost from './component/Showpost'
import PostListProvider from './Store/Post_list_store'
function App() {
  const [isSelected,setSelected]=useState(false);

  return (
    <PostListProvider>
    <div className="appcontainer">
    <Siderbar isSelected={isSelected} setSelected={setSelected}></Siderbar>
    <div className="container">
     <Header></Header>
     <Showpost isSelected={isSelected}></Showpost>
     <Footer></Footer>
     </div>
     </div>
     </PostListProvider>
  )
}

export default App
