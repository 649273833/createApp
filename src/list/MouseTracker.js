import React from 'react';
import Mouse from './Mouse'
import Cat from './Cat'
import Cat2 from './Cat2'

class MouseTracker extends React.Component{
  renderTheCat1 = (mouse) => {
    return <Cat mouse={mouse} />;
  }
  renderTheCat2 = (mouse) => {
    return <Cat2 mouse={mouse} />;
  }
  render(){
    return(
      <div>
        <Mouse children={this.renderTheCat1}/>
        <Mouse children={this.renderTheCat2}/>
      </div>
    )
  }
}

export default MouseTracker