import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from 'react-icons/fa'
import { useAppContext } from '../context/appContext'

import Logo from './Logo'
import React from 'react'
import NavLinks from "./NavLinks";

const SmallSidebar = () => {
  const {showSidebar,toggleSidebar } = useAppContext()
  return (
    <Wrapper>
        <div className={showSidebar? 'sidebar-container show-sidebar': 'sidebar-container'}>
        {/* <div className='sidebar-container show-sidebar'> */}
        <div className='content'>
          <button type='button' className='close-btn' onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggleSidebar}/>
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar