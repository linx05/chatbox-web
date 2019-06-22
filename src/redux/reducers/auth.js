import { SET_USER_TOKEN } from '../actions/auth'

const initialState = {

}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_TOKEN: {
      return {
        ...state,
        token: action.payload
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;
