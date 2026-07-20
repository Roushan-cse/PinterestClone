import React from 'react'
import Sidebar from "./Sidebar/Sidebar"
import Navbar from "./Navbar/Navbar"
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='min-h-screen'>

        <div className='flex'>

            <Sidebar />
            <Navbar/>
        
        </div>
        <main className='ml-[var(--sidebar-width)] mt-18 p-4'>
          <Outlet/>

        </main>
      
    </div>
  )
}

export default MainLayout
