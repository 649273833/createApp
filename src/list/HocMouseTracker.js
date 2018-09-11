import React from 'react';
import HocCat from './HocCat'
import HocCat2 from './HocCat2'
class HocMouseTracker extends React.Component{
  render(){
    return(
      <div>
        <HocCat/>
        <HocCat2/>
      </div>
    )
  }
}
export default HocMouseTracker