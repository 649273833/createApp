import React from 'react';
class Mouse extends React.Component{
  state = {
    x:0,
    y:0
  }
  handleMouseMove = (e) =>{
    this.setState({
      x:e.clientX,
      y:e.clientY
    })
  }
  render(){
    let {x,y} = this.state
    return(
      <div style={{height:'100vh'}} onMouseMove={(e)=>this.handleMouseMove(e)}>
        {this.props.children(this.state)}
        {x},{y}
      </div>
    )
  }
}

export default Mouse