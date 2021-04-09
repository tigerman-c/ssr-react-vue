const { useReducer } = require('react')
const React =  require('react')
const {useState,useEffect} = React

module.exports = function() {
    const [count,setCount] = useState(0)
    function addCount(){
        setCount(count+1)
    }
    useEffect(()=>{
        console.log('mounted')
    },[count])
    return (
        <div className="news">
            <p>{count}</p>
            <button onClick={addCount}>add</button>
        </div>
    )
}

