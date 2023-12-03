import React from 'react'
import Section1 from '../../components/Section1'
import { Outlet } from 'react-router-dom'
import Section8 from '../../components/Section8'

function MainLayout() {
  return (
    <>
    <Section1/>
    <Outlet/>
    <Section8/>
    </>
  )
}

export default MainLayout