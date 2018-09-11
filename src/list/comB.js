import React from 'react';
import wrapWithUsername from './hoc'
import { Consumer } from '../context/context';


class Goodbye extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      status : true
    }
  }
  componentDidMount(){
    console.log('B:',this.props)
  }

  render(){
    const theme = {
      fontFamily: 'Georgia',
      color: 'blue'
    };
    const paragraphText = {
      ...theme,
      fontSize: '20px'
    };
    return(
      <div>
        <p style={paragraphText}>goodbye {this.props.username}</p>
        <Consumer>{({id,title}) =><h1>title:{title},id:{id}</h1>}</Consumer>
      </div>
    )
  }
}
Goodbye = wrapWithUsername(Goodbye)
export default Goodbye