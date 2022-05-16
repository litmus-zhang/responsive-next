import Link from 'next/link'
import NavItem from './NavItem'
import React,{useState} from 'react'


const MENU_LIST = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
]

export default function Navbar()
{
    const [navActive, setNavActive] = useState(false)
    const [activeIdx, setActiveIdx] = useState(0)
  return (
      <header>
          <nav className="nav">
              <Link href={'/'}>
              <a onClick={()=> setActiveIdx(0)}>
                  <h1 className="logo">CodeWithZhang</h1>
                </a>
              </Link>

              <div className={`nav__menu-bar`}
              onClick={()=>setNavActive(!navActive)}>
              
                  <div></div>
                  <div></div>
                  <div></div>
              </div>
              <div className={`${navActive ? 'active' : ''} nav__menu-list`}>
                  {
                      MENU_LIST.map((menu,idx )=>
                      {
                          return <div 
                              onClick={() =>
                              {
                                  setActiveIdx(idx)
                                  setNavActive(false)
                              }}
                              key={menu.text}
                          >                          
                              <NavItem active={activeIdx === idx }  {...menu}/>
                          </div>
                      })
                }
              </div>
          </nav>
    </header>
  )
}
