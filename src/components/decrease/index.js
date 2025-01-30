const Decrease = ({number,setNumber})=>{
    return(
        <button onClick={()=> setNumber(number-1)}>-</button>
    )
}

export default Decrease