import React from 'react'
import {NavLink,Prompt} from 'react-router-dom';
const Links = ({match}) =>
      <div className='nav' >
        <div>match.url:{`${match.url}`}</div>
        <Prompt when={false} message="您确定要离开当前页面吗？"/>
        <NavLink to={{
          pathname:`${match.url}/List1`,
          search:'?id=1&name=aaa',
          hash:'#the-hash',
          state:{type:2},
          data:5
        }}
             activeClassName="selected">list1</NavLink>
        <NavLink to={`${match.url}/List2`} activeClassName='selected'>list2</NavLink>
        <NavLink to={`${match.url}/List3`} activeClassName='selected'>todolist</NavLink>
        <NavLink to={`${match.url}/List4`} activeClassName='selected'>Mouse</NavLink>
        <NavLink to={`${match.url}/List5`} activeClassName='selected'>HocMouse</NavLink>

      </div>
let title = {id:0,title:'this is context demo'}
class List extends React.Component{
  componentDidMount(){
  }
  render(){
    return(
      <div>
        <Links match={this.props.match}/>
      </div>
    )
  }
}
export default List
