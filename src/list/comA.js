import React from 'react';
import wrapWithUsername from './hoc'
class Welcome extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      status : true
    }
  }
  componentDidMount(){
    console.log('A:',this.props)
  }
  render(){
    return(
      <div>welcome {this.props.username} {this.state.status ? '是' : '否'} {this.props.children}</div>
    )
  }
}
Welcome = wrapWithUsername(Welcome)
export default Welcome