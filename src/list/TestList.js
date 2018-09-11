import React from 'react'
import {connect} from 'react-redux';
import { add,edit } from '../redux/action';
import {set as setGlobalData, get as getGlobalData } from '../comjs/globalData'
let num = 0
class Columns extends React.Component {
  Miao =()=>{
    console.log('miao miao miao')
  }
  render() {
    return (
      <React.Fragment>
        <td>Hello</td>
        <td>World</td>
      </React.Fragment>
    );
  }
}
class TestList extends React.Component{
  state = {
    num:0,
    count:0,
    globalnum:getGlobalData('num')
  }

  handleChange = (e) =>{
    this.setState({num:e.target.value})
  }
 componentDidMount(){
    this.Input.focus()
    // this.props.dispatch(add(11111))
    // this.props.dispatch(edit())
    this.Cat.Miao()
 }
 handelError = () =>{
    this.setState({hasError:true})
 }
 componentDidCatch(error,info){
    this.setState({hasError:true})
    console.log(error, info)
 }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.color !== nextProps.color) {
  //     return true;
  //   }
  //   if (this.state.count !== nextState.count) {
  //     return true;
  //   }
  //   return false;
  // }
  handleGlobal = () =>{
    num = num +1;
    setGlobalData('num',num)
    console.log(getGlobalData('num'))
    this.setState({globalnum:getGlobalData('num')})
  }
  render(){
    let {location} = this.props
    let {num,globalnum} = this.state
    let {index} = this.props.storeState.storeState
    let {number} = this.props.storeState.storeState2

    return(
      <div>
        {
          location ?
           <div>
             <div>hash:{location.hash}</div>
             <div>pathname:{location.pathname}</div>
             <div>search:{location.search}</div>
             <div>state:{location.state && location.state.type}</div>
             <div>data:{location.data}</div>
           </div>
            :
            null
        }
        <input type="text" ref={(ref)=>this.Input = ref} value={num} onChange={this.handleChange}/>
        <div>
          {num}是{num % 2 === 0 ? 'even' : 'odd'}类型
        </div>
        <button style={{color:this.props.color}} onClick={()=>{this.setState({count:this.state.count+1})}}>click me:{this.state.count}</button>
        <br/>
        <button onClick={()=>this.props.dispatch(add(222))}>{index}</button>
        <br/>
        <button onClick={()=>this.props.dispatch(edit())}>{number}</button>
        <br/>
        <button onClick={this.handleGlobal}>{globalnum ? globalnum : 0}</button>
        <table>
          <tbody>
            <tr>
              <Columns ref={node =>this.Cat = node}/>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
TestList.defaultProps = {
  color:'#e4393c'
}
const mapStateToProps = state =>({storeState:state})
export default connect(
  mapStateToProps
)(TestList)
