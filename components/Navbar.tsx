import React from 'react'
import Menu from './Menu'

const Navbar = () => (
  <nav className=' bg-white border-b-2 shadow-sm px-2'>
    <div className='container flex flex-wrap justify-between'>
      <div className='p-2 font-bold'>
        <span className=''>
          DMTOOL
        </span>
      </div>
      <div>
        <Menu items={[{path: '/', text: 'Home'}, {path: '/characters', text: 'Characters'}]}/>
      </div>
    </div>
  </nav>
)

export default Navbar