import React from 'react';
import {HashRouter,NavLink,Route,Redirect} from 'react-router-dom'
import Loadable from 'react-loadable';
import  '../App.pcss';
import Loading from './loading'
const RouterConfig = [
  {
    isRequire:true,
    redirect:true,
    path:'/Edit' ,
    title: 'Edit' ,
    component : Loadable({ loader:()=>import('../list/edit'), loading:Loading, timeout: 10000, }),
  },
  {
    isRequire:false,
    path:'/List' ,
    title: 'List' ,
    component : Loadable({ loader:()=>import('../list/List'), loading:Loading, timeout: 10000, }),
  },
  {
    isRequire:false,
    path:'/List/List1' ,
    title: 'List1' ,
    component : Loadable({ loader:()=>import('../list/TestList'), loading:Loading, timeout: 10000, })
  },{
    isRequire:false,
    path:'/List/List2' ,
    title: 'List2' ,
    component : Loadable({ loader:()=>import('../list/TestList'), loading:Loading, timeout: 10000, })
  },{
    isRequire:false,
    path:'/List/List3' ,
    title: 'List3' ,
    component : Loadable({ loader:()=>import('../list/todolist'), loading:Loading, timeout: 10000, })
  },{
    isRequire:false,
    path:'/List/List4' ,
    title: 'List4' ,
    component : Loadable({ loader:()=>import('../list/MouseTracker'), loading:Loading, timeout: 10000, })
  },{
    isRequire:false,
    path:'/List/List5' ,
    title: 'List5' ,
    component : Loadable({ loader:()=>import('../list/HocMouseTracker'), loading:Loading, timeout: 10000, })
  }
];
const ChildrenRouter = (RouterConfig,i) =>{
  return (
    <React.Fragment key={i}>
      {
        RouterConfig.redirect ? <Route exact path={RouterConfig.path.slice(0,RouterConfig.path.lastIndexOf('/') + 1)} render={()=>(<Redirect to={ RouterConfig.path }/>)}/> : null
      }
      {
        RouterConfig.isRequire ? <Route exact={RouterConfig.exact} path={RouterConfig.path}  component={RouterConfig.component} /> : null
      }
    </React.Fragment>
  )
};
const ChildrenMap = (RouterConfig) =>{
  return RouterConfig.map((children,i) =>{
      return (
        ChildrenRouter(RouterConfig[i],i)
      )
    }
  )
};

const Links = () =>
  <div className='nav'>
    <NavLink to='/Edit' activeClassName='selected'>Edit</NavLink>
    <NavLink to='/List' activeClassName='selected'>List</NavLink>
  </div>;
const Routers = () =>{
  return(
    <div className="App">
      <HashRouter>
        <React.Fragment>
          {
            ChildrenMap(RouterConfig)
          }
        </React.Fragment>
      </HashRouter>
    </div>
  )
}

export default Routers;
