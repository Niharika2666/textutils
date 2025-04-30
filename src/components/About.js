import React,{useState} from 'react'

export default function About() {
  const [myStyle,setmyStyle]=useState({
    color:'black',
    backgroundColor:'white',
    
  })
  const [btnText,setbtnText]=useState("Enable DARK MODE")
const changeState=()=>{
  if(myStyle.color === "black"){
  setmyStyle({
     color:'white',
    backgroundColor:'black',
    border:'1px solid white'
  })
  setbtnText("Disable DARK MODE");
}
else{
  setmyStyle({
    color:'black',
   backgroundColor:'white',
   
 })
 setbtnText("Enable DARK MODE");
}
}
  return (
    <div style={myStyle}>
      <h1>About Us</h1>
      <div>
        <p>iam niharika .......................</p>
      </div>
      <div className="container">
      <button type="button" className="btn btn-primary" onClick={changeState}>{btnText}</button>
      </div>
    </div>
  )
}
