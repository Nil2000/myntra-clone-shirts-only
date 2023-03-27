import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ShirtListPage from '../pages/ShirtListPage'
import ShirtDetailsPage from '../pages/ShirtDetailsPage'

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact Component={ShirtListPage}/>
        <Route path='/shirts/:id' exact Component={ShirtDetailsPage}/>
      </Routes>
    </Router>
  )
}
