
import './name.css'

function Name(props){

    const {name , age , hasError} = props
  

    return(
      <>
        <p className={`text ${hasError ? 'text-red' : 'text-green'}`}>my name is {name}, im {age}</p>
        <p></p>
      </>
    )
  }

export default Name;