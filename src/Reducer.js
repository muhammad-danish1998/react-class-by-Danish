  //creating reducer function
  const reducer = (state , action) =>{
    if(action.type === "INCREMENT"){
      return state + 1;
    }
    else if(action.type === "DECREMENT"){
      // return state - 1
      if(state == 0){
       return state = 0
      }
      else{
      return state - 1
      }
    }
  return state;
  }
  export default reducer