import React, { useState } from "react";
import './Welcome.css'
const Welcome = (props) => {
    const [name, setName] = useState(props.name);
 
  
  
    const [showResults, setShowResults] = React.useState(false)
    const onClick = () => setShowResults(true)
    return (
        <>
        <div class="seller-auth">
        <div  class="login" >
        <input  class="form-input"type="text" placeholder={props.name}
        value={name}
        onChange={e => setName(e.target.value)}
            />

        <input class="form-button" type="submit" value="Log In" onClick={onClick} />
        </div>
      </div>
        { showResults ? <Msg  name={name}   /> : null }
        </>
      
    )
  }

  
const Msg = (props) => (
    <div id="Msg">
     
      <h1>Hi! <span> {props.name} </span></h1>
      <h2>Welcome to College.</h2>
      
    </div>
  )
export default Welcome
