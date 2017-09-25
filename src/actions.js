export const handleInput = (text)=>({
  type:'INPUT',
  text:text
});

export const handleFetch = (result) =>({
  type:'FETCH',
  net:result
});

export const fetchSomething = () =>(
  (dispatch)=>(
    fetch('http://192.168.1.205:3000/info')
    .then(res=>res.json())
    .then(result=>dispatch(handleFetch(result)))
  )
);
