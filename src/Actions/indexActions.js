

export const changeSingleToggle= function(status){
    return function(dispatch){
        dispatch({type:"SINGLE", payload:status})
    }
}

export const firstFetch= function(){
    return function(dispatch) {
        fetch("http://localhost:3001/posts").then(res => res.json())
        .then((data)=>{
            dispatch({ type: "START", payload: data}); 
        })
      };
}