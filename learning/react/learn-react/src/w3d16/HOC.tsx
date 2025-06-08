import React from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

function HOC() {
  return (
    <div>HOC<br/>
    <ClickCounter />
    <HoverCounter /></div>
  )
}

export default HOC