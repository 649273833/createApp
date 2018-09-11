import React from 'react';
import zan from '../img/zan.png'
class Cat extends React.Component{
  render(){
    let mouse = this.props.mouse
    let styles = {
      position:'absolute',
      top:mouse.y,
      left:mouse.x
    }
    return(
      <img src={zan} style={styles} alt=""/>
    )
  }
}
export default Cat