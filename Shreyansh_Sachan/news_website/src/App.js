
import './App.css';
import Header from './components/header'
import NewsList from './components/newslist'
import Grid from './components/home/grid.js'
import Footer from './components/footer'
import Carousel from './components/carousel'
function App() {
  return (
    <>
      <Header/>
      
      <NewsList/>
      <Grid/>
      <Footer/>
      </>
  );
}

export default App;
