const redux = require('redux');

function counterReducer(state={counter:0},action)
{
    if(action.type==='increment')
    return {
        counter:state.counter+1
    }

    else if(action.type==='decrement'){
        return{counter:state.counter-1}
    }
}

const store = redux.createStore(counterReducer)


const counterSubscriber = () =>
{
    const latestState = store.getState();
    console.log(latestState)
}

store.dispatch({type:'decrement'})
store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:'increment'})
store.dispatch({type:'increment'})

store.subscribe(counterSubscriber)

// for(let i=1; i<=5; i++)
// {
//     store.dispatch({type:'increment'})
// }




console.log(store.getState())