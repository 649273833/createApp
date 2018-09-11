import * as actionType from './counter';
const add = (a) =>{
  // console.log(a)
  return {
    type:actionType.ADD,
  }
};
const ed = (data) => ({
  type:actionType.EDIT,
  data
})
const edit = () =>{
  return dispatch =>{
    let a = 111;
    dispatch(ed(a))
  }
}
const changeVisibility = visible =>({
  type:'CHANGE_VISIBILITY',
  visible
})
changeVisibility(false)
export {add,edit}