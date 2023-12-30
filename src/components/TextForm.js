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
      props.showAlert("Changed To LowerCase");
    }
  }
  const handleUpperCase = () => {
    if (text.length > 0) {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Changed To UpperCase");
    }
  }
  const handleClearText = () => {
    if (text.length > 0) {
      setClearText("Cleared")
      setText("");
      props.showAlert("Cleared ! ");
    }
  }
  const handleCopyText = () => {
    if (text.length > 0) {
      var Text = document.getElementById("myBox");
      navigator.clipboard.writeText(Text.value);
      setCopyText("Copied");
      props.showAlert("Copied !");

    }
  }
  const handleRemoveText = () => {
    if (text.length !== 0) {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      setRemoveText("Removed");
      props.showAlert("Extra Spaces Has Removed ! ");

    }
  }
  return (<>
    <div className='container my-3'>
      <h3 className='textHeading'>{props.heading}</h3>
      <div className="form-group">
        <textarea className="form-control" value={text} onChange={handleonChange} style={{ backgroundColor: props.mode === "light" ? 'white' : 'grey', color: 'black' }} id="myBox" rows="6"></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-2" onClick={handleUpperCase}>convert to uppercase</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleLowerCase}>convert to lowercase</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleRemoveText}>{RemoveText}</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleCopyText}>{CopyText}</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleClearText}>{ClearText}</button>


    </div>
    <div className='container'>
      <h5 className='textSummary'>Know more about <b>"YOUR TEXT"</b> </h5>
      <span className='lengthCounter'>{text.split(" ").length} - words &  {text.length} - characters </span>
      <p>{0.008 * text.split(" ").length}  Minutes read</p>
      <h4>Preview</h4>
      <p>{text.length > 0 ? text : "Enter Text To Preview It"}</p>
    </div>
  </>
  )
}
