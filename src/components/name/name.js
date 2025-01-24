
import './name.css'

function Name(props){

    const {name , age} = props
  
    return(
      <>
        <p className="text-green">my name is {name}, im {age}</p>
        <p></p>
      </>
    )
  }

export default Name;