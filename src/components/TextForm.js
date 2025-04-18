import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {

  const [text, setText] = useState("");
  const [ClearText, setClearText] = useState("Clear Text");
  const [CopyText, setCopyText] = useState("Copy Text");
  const [RemoveText, setRemoveText] = useState("Remove Extra space");
  const handleonChange = (event) => {
    setCopyText("CopyText");
    setText(event.target.value);
    setRemoveText("Remove Extra space");
    setClearText("Clear Text");
  }
  const handleLowerCase = () => {
    if (text.length > 0) {
      let newText = text.toLowerCase();
      setText(newText);
    }
  }
  const handleUpperCase = () => {
    if (text.length > 0) {
      let newText = text.toUpperCase();
      setText(newText);
    }
  }
  const handleClearText = () => {
    if (text.length > 0) {
      setClearText("Cleared")
      setText("");
    
    }
  }
  const handleCopyText = () => {
    if (text.length > 0) {
      var Text = document.getElementById("myBox");
      navigator.clipboard.writeText(Text.value);
      setCopyText("Copied");
    

    }
  }
  var textLetter=[...text].filter(x=>(x!==' ' && x!==(/[\r\n]+/))).length// this will not count the character which is null
  //below code will not count null words and will not increase word by going next line 
 var textWord=(text.split(/\s+/).filter((element)=>{return element.length!==0}).length);
  return (<>
    <div className='container my-3'>
      <h3 className='textHeading'>{props.heading}</h3>
      <div className="form-group">
        <textarea className="form-control" value={text} onChange={handleonChange} style={{ backgroundColor:'grey'}} id="myBox" rows="6"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpperCase}>convert to uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowerCase}>convert to lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyText}>{CopyText}</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearText}>{ClearText}</button>


    </div>
    <div className='container'>
      <h5 className='textSummary'>Know more about <b>"YOUR TEXT"</b> </h5>
      <span className='lengthCounter'>{textWord} - words  </span>
      <span className='lengthCounter'>{textLetter}- Letters </span>
          <p>{0.008 *textWord}   Minutes read</p>
      <h4>Preview</h4>
      <p style={{backgroundColor:'#2b1010',borderRadius:'12px', color:'white',padding:'9px'}}>{text.length > 0 ? text : "Enter Text To Preview It"}</p>
      
    </div>
  </>
  )
}
