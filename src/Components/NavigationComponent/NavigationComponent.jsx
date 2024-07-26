import React from 'react'
import './NavigationComponent.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import HomeComponent from '../HomeComponent/HomeComponent'
import AboutComponent from '../AboutComponent/AboutComponent'
import DepartmentComponent from '../DepartmentComponent/DepartmentComponent'
import EventComponent from '../EventComponent/EventComponent'
const NavigationComponent = () => {
  return (
    <BrowserRouter>
        <header>
          <nav>
            <ul>
             
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/departments">Departments</Link></li>
              <li><Link to="/events">Events</Link></li>
            </ul>
          </nav>
        </header>
    
        <Routes>
          <Route extact path='/' element={<HomeComponent/>}></Route>
          <Route extact path='/about' element={<AboutComponent/>}></Route>
          <Route extact path='/departments' element={<DepartmentComponent/>}></Route>
          <Route extact path='/events' element={<EventComponent/>}></Route>
        </Routes>
        <footer>
              <p>&copy; 2024 Saveetha Engineering College. All rights reserved.</p>
        </footer>
    </BrowserRouter>

    
  )
}

export default NavigationComponent