import React from 'react'

export default function Card(props) {
  return (
    <div className={cl.card}>
      {props.children}
    </div>
  )
}
