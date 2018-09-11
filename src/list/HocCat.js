import React from 'react';
import zan from '../img/zan.png'
import hocMouse from './HocMouse'
class Cat extends React.Component{
  render(){
    let mouse = this.props.mouse
    let styles = {
      position:'absolute',
      top:mouse.y,
      left:mouse.x
    }
    return(
      <React.Fragment>
        <img src={zan} style={styles} alt=""/>
        {this.props.children}
      </React.Fragment>
    )
  }
}
Cat = hocMouse(Cat)
export default Cat