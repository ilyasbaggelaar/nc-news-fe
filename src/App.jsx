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
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=delete" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
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
