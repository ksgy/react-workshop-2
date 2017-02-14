export default function(state, action) {
  if (!state) state = 1337
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
  	case 'DECREMENT':
    	return state - 1
  	case 'RESET':
    	return state = 1337
    default:
      return state
  }
}
