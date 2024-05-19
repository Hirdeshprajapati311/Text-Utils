import React, { useState } from 'react'



export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    
    const handleClearClick = () => {
        let newText = '';
        setText(newText)
    }


    const [text, setText] = useState('');

    //setText("New Text");
    return (
        <>        
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>


        </div>
        <div className="container my-3" >
            <h2>Your text Summery</h2>
            <p>{(text.trim().split(" ").length)} words and {text.length} characters</p>
            <p>{0.008 * text.split("").length} Minutes read</p>
            <h2>Prewiew</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
