import React, {useState} from 'react'

export default function Textform(props)
 {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        
        setText(newText);
    }
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const [text,setText]=useState('enter the text here2')
  return (
    
    <div>
      <div className="mb-3">
  <h3>{props.heading}</h3>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
    
  )
}
