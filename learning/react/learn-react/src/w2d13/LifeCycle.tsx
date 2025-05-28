import React, { Component } from 'react'

export class LifeCycle extends Component {
    constructor(props) {
        super(props)
        console.warn("Constructor");
    }
    componentDidMount() {
        console.warn("mount");
        
    }

  render() {
    console.warn("render");
    return (
      <div>LifeCycle</div>
    )
  }
}

export default LifeCycle