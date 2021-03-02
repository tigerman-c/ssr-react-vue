const React =  require('react')
const {useState,useEffect} = React

module.exports = function() {
    const [count,setCount] = useState(0)
    function addCount(){
        setCount(count+1)
    }
    return (
        <div className="application">
            <div>{count}</div>
            <button onClick={addCount}>add</button>
        </div>
    )
}

