import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Spacer from './components/Spacer'
import Profile from './components/Profile'
import Contact from './components/Contact'
import ArticlesSection from './components/ArticlesSection'
import { BrowserRouter } from 'react-router-dom';
import Experience from './components/Experience'
import { Element } from 'react-scroll'
import Articles from './components/Article'
import Article from './components/Article'
import ScrollAnimationObserver from './components/ScrollAnimationObserver'
import MainPage from './MainPage'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'
import photo from './assets/profile_pic.png'

export type Art = { id: number, title: string; article: string, excerpt: string }
export type article = { id: number; title: {rendered: string}; content: {rendered: string}; date: string; excerpt: {rendered: string}};
export const client = {url: "aml", firstName: "Anne-Marie", lastName: "Lucey", role: "Barrister", photo: photo}

function App() {  
  const [nbNav, setNbNav] = useState(0)
  const [currentNav, setCurrentNav] = useState('/')
  const [currentArticle, setCurrentArticle] = useState<Art>({id: 0, title: '', article: '', excerpt: ''})
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([{id: 0, name: ""}]);

  function incNav() {
    setNbNav((prev)=>prev+1)
    console.log('nb nav ', nbNav)
  }
  
      async function fetchArticles() {
          try {
              const res = await fetch(`https://${client.url}.wp.polaris-ds.com/wp-json/wp/v2/posts`);
              const articles = await  res.json();        
              console.log(articles);
              return articles;
          } catch(err: any) {
              console.log('error', err.message);
              return [{error: err.message}]
          }
      }
      async function fetchCategories() {
          try {
              const res = await fetch(`https://${client.url}.wp.polaris-ds.com/wp-json/wp/v2/categories`);
              const categories = await res.json();
              return categories.map((cat: any)=>({id: cat.id, name: cat.name}));
          } catch(err: any) {
              console.log('error ', err.message)
              return [{error: err.message}]
          }
      }
      
      useEffect(()=>{        
          fetchArticles().then((art)=>setArticles(art))
          .then(()=>fetchCategories()).then((categories)=>setCategories(categories));
          
      },[])
  return (
    <>
      <BrowserRouter>
        <Header currentNav = {currentNav} setCurrentNav={setCurrentNav} clickHandler={incNav} />      
            <ScrollAnimationObserver setCurrentNav={setCurrentNav}>
              <Element id= "" name="/">
                  {/*nbNav>0 && <Spacer />*/}
                  <Hero />
              </Element>
              <Element id = "/experience" name="/experience">
                  <Spacer />
                  <Experience />
              </Element>
              <Element id = "/profile" name="/profile">
                  <Spacer />
                  <Profile />
              </Element>
              <Element id="/articlesSection" name="/articlesSection">
                  {articles.length>0 && 
                  <ScrollAnimationObserver setCurrentNav={setCurrentNav}>
                    <Spacer />
                    <ArticlesSection categories = {categories} articles = {articles} setCurrentArticle={setCurrentArticle} client={client}/>
                  </ScrollAnimationObserver>
                  }
              </Element>
              <Element id="/article" name="/article">
                {currentArticle.article!=="" && 
                <ScrollAnimationObserver setCurrentNav={setCurrentNav}>                  
                  <Article articles = {articles} currentArticle={currentArticle} client={client} setCurrentArticle={setCurrentArticle} />
                </ScrollAnimationObserver>}
              </Element>
              <Element id="/contact" name="/contact">
                  <Spacer />
                  <Contact />
              </Element>
          </ScrollAnimationObserver>
          
        <Footer />
        
      </BrowserRouter>
    </>
  )
}

export default App
