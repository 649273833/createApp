let globalData = {
  num:0
}

const set = (key,data) =>{
  globalData[key] = data
}
const get = (key) =>{
  return globalData[key]
}
export {globalData,set,get}