import React from 'react';
export default (WrappedComponent) =>{
  return class NewComponent extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        username : ''
      }
    }
    componentWillMount () {
      this.setState({username: '小鞠啊'});
    }
    componentDidMount () {
      console.log('这个高阶组件加载完成了！')
    }
    render(){
      return(
        <WrappedComponent username={this.state.username}>
          这是一个高阶组件
        </WrappedComponent>
      )
    }
  }
}