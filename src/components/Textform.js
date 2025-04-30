import React, {useState} from 'react'

export default function Textform(props)
 {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        
        setText(newText);
    }
    const handleLowerClick=()=>{
        let newText=text.toLowerCase();
        
        setText(newText);
    }
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const handleClearClick=(event)=>{
    
        setText("");
    }
    const speakText=()=>{
        console.log(text);
        const utterance = new SpeechSynthesisUtterance(text);
        const voices = speechSynthesis.getVoices();
        utterance.voice = voices[0]; // Select the first available voice
        speechSynthesis.speak(utterance);
      }
    const [text,setText]=useState('enter the text')
  return (
    
    <div>
        <div className="container">
      <div className="mb-3">
  <h3>{props.heading}</h3>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lowercase</button>
<button className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear text</button>
<button className="btn btn-primary my-2 mx-2" onClick={speakText}>speak text</button>
</div>
<div className="container my-2">
<h3>Your Text Summary</h3>
<b>{(text.split(" ")).length-1} words,{text.length} characters</b>
<h4 className="my-3">Preview</h4>
<p>{text}</p>
</div>
    </div>
    
  )
}
