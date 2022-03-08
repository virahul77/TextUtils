import React ,{useState} from "react";


export default function TextForm(props) {
    const handleLoCase = (event)=>{
        setText(text.toLowerCase())
        props.showAlert('success','word converted to lower case')
    }
    const handelUpClick = (event)=>{
        // console.log('Button UpperCase Clicked');
        // setText('You have clicked on fn handleOnClick')
        setText(text.toUpperCase())
        props.showAlert('success','word converted to upper case')
    }
    const handleOnChange = (event)=>{
        // console.log('The text being Changed');
        setText(event.target.value)
        // console.log(event);
    }
    const clearFn = ()=>{
      setTextBack(text)
      setText('')
      props.showAlert('danger','Text Cleared ! Click Undo button to Revert Back')
    }
    const undoFn =()=>{
     setText(textBack);
     props.showAlert('success','Text Recovered ! Click Copy to clipboard to copy')
    }
    const removeExtraSpacesFn =()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(' '));
      props.showAlert('success','Extra Spaces Removed')
    }
    const copyToClipboardFn = ()=>{
      navigator.clipboard.writeText(text)
      setCopy('Copied');
      props.showAlert('success','Copied to clipboard')
      setTimeout(() => {
        setCopy('Copy to ClipBoard')
      }, 2000);
    }
    const [text,setText] = useState('');
    const [textBack,setTextBack] = useState('');
    const [copy,setCopy] = useState('Copy to ClipBoard');
    // const [timeType,settimeType] = useState('seconds');
    const [time,setTime] = useState(0.048*text.split(' ').length);

    // const updateLiveTime = ()=>{
    //   let tx = 0.048*text.split(' ').length;
    //    setTime(tx);
    //    settimeType('seconds')
    // }
    

    //calling an useSate hook. useState value inside is default value of text and setText in Function to update text
    //useState should be inside function component
    // text= 'hajdhj'; // we can not change its state like this
    // setText('Rahul Kumar Vishwakarma');
  return (
    <>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':"black"}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3 mt-3">
          <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#59a5cf':'white', color: props.mode==='dark'?'white':"black"}} value={text} onChange={handleOnChange} id="myTextBox" rows="8" placeholder="Enter Text Here" ></textarea>
        </div>
        <button disabled={text.length===0} type="button" className="btn btn-primary my-1" onClick={handelUpClick} >
          Convert to UPPERCASE
        </button>
        <button disabled={text.length===0} type="button" className="btn btn-secondary mx-2 my-1" onClick={handleLoCase} >
          Convert to lowercase
        </button>
        <button disabled={text.length===0} type="button" className="btn btn-danger mx-2 my-1" onClick={clearFn}>
          Clear Text
        </button>
        <button disabled={text.length===0} type="button" className="btn btn-success mx-2 my-1" onClick={undoFn}>
          Undo
        </button>
        <button disabled={text.length===0} type="button" className="btn btn-danger mx-2 my-1" onClick={copyToClipboardFn} >
          {copy}
        </button>
        <button disabled={text.length===0} type="button" className="btn btn-warning mx-2 my-1" onClick={removeExtraSpacesFn}>
          Remove Extra Spaces
        </button>
        <button disabled={text.length===0} type="button" className="btn btn-info mx-2 my-1">
          Info
        </button>
        <button disabled={text.length===0} type="button" className="btn btn-dark mx-2 my-1">
          Dark
        </button>
      </div>
      <div className="container" style={{color: props.mode==='dark'?'white':"black"}}>
          <h3>Your Text Summery</h3>
          <p>your text has {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
          <p>It will take you approx {0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} seconds to read</p>
          <h3>Preview</h3>
          <p>{text.length>0?text:'Enter Text Above to Preview'}</p>
      </div>
    </> 
  );
}
