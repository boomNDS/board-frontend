import Link from 'next/link'
import React from 'react'
import CButton from './CButton'

const CNavbar = () => {
  return (
    <div className="navbar bg-green-500 h-[60px] text-white lg:px-6">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl italic">a Board</a>
      </div>
      <div>
        <div className="md:hidden drawer drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer-4" className="drawer-button swap swap-rotate">
              <input type="checkbox" />
              <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
              <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
            </label>
          </div>
          <div className="drawer-side 0">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-green-500 text-white">
              <li><a>Back</a></li>
              <li><a>Home</a></li>
              <li><a>Our Blog</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="hidden md:block flex-none gap-2">
        <CButton to='/signIn' textValue="Sign in" />
        {/* <div>
          <p>Jassica</p>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="avatar" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li className='p-1'>Logout</li>
          </ul>
        </div> */}
      </div>
    </div>
  )
}

export default CNavbar