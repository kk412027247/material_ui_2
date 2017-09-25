const iniState = {text:'hintText',net:'netText'};

export default (state=iniState,action)=>{
  switch(action.type){
    case 'INPUT':
      return{...state, text:action.text};
    case 'FETCH':
      return{...state, net:action.net};
    default:
     return state
  }
}
