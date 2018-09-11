import React from 'react';
import hocMouse from './HocMouse'
class Cat2 extends React.Component{
  render(){
    return(
      <React.Fragment>
        cat2:{this.props.mouse.x}
        {this.props.children}
      </React.Fragment>
    )
  }
}
Cat2 = hocMouse(Cat2)
export default Cat2