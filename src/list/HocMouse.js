import React from 'react';
export default (Component) =>{
  return class Mouse extends React.Component{
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
      return(
        <Component mouse={this.state}>
          <div style={{height:'100vh'}} onMouseMove={(e)=>this.handleMouseMove(e)}/>
        </Component>
      )
    }
  }
}