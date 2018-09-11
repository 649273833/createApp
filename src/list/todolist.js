import React from 'react';
import {Consumer} from '../context/context'
import Welcome from './comA'
import Goodbye from './comB'
class List4 extends React.Component {
  render() {
    return (
      <div>
        我是一个普通组件
        <Welcome status={true}/>
        <Goodbye status={false}/>
        <Consumer>{
          ({id,title}) =>
          <h1>title:{title},id:{id}</h1>
         }
        </Consumer>
      </div>
    );
  }
}
export default List4