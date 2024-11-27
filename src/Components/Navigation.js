import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

function Navigation() {

  const navigate = useNavigate();

  return (
    <div className='navigation'>
      <h3>Navigation links</h3>
        <div className='items' onClick={()=>navigate('/')} >Home</div>
        <div className='items' onClick={()=>navigate('/about')} >About</div>
        <div className='items' onClick={()=>navigate('/artist')} >Artist</div>
        <div className='items' onClick={()=>navigate('/album')} >Album</div>
    </div>
  )
}

export default Navigation
