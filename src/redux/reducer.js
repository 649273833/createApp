import { ADD ,EDIT} from './counter'
const INITIAL_STATE = {
  index:0,
}

function storeState (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        index: state.index + 1
      }
    default:
      return state
  }
}


const TEST_STATE = {
  number:1,
}

function storeState2 (state = TEST_STATE, action) {
  switch (action.type) {
    case EDIT:
      return {
        ...state,
        number: state.number + 1
      }
    default:
      return state
  }
}
export {storeState,storeState2}
