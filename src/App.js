import './App.css';
import {Routes, Route, BrowserRouter, Link, Outlet, useNavigate} from 'react-router-dom';
import Layout from './Components/Layout';

function App() {

  const Home = ()=>{
    return(
      <div className='content'>
        This is home content
        <div className='temp'>
          <Link to='/artist'><div className='tempitem'></div></Link>
          <div className='tempitem'></div>
          <div className='tempitem'></div>
          <div className='tempitem'></div>
          <div className='tempitem'></div>
          <div className='tempitem'></div>
          <div className='tempitem'></div>
          <div className='tempitem'></div>
          <div className='tempitem'></div>
          <div className='tempitem'></div>
          <div className='tempitem'></div>
        </div>
      </div>
    )
  }

  const About = ()=>{
    return(
      <div className='content'>
        This is about content
      </div>
    )
  }

  const Artist = ()=>{
    return(
      <div className='content'>
        This is artist content
      </div>
    )
  }

  const Album = ()=>{
    return(
      <div className='content'>
        This is album content
      </div>
    )
  }


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/artist' element={<Artist />} />
          <Route path='/album' element={<Album />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
