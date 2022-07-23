import React from 'react'
import Navbar from './Navbar'

export default function Overlay(props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  )
}
