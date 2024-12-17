import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home.jsx'
import Topics from './pages/Topics.jsx'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Article from './pages/Article.jsx'

function App() {

  return (
    <div>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/topics" element={<Topics/>}/>
          <Route path="/articles/:article_id" element={<Article/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
