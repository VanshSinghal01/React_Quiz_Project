import { useState } from "react"
import Pop from "./popup";
import { Link } from "react-router-dom";


function App() {

  const [selectedValue, setSelectedValue] = useState('');
  const [popup, setpopup] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [cross, setcross] = useState(false)
  

  const onsubmitfunc = () => {
    if (selectedValue == 'JavaScript XML') {
      setpopup(true)
    }
    else {
      setpopup(false)
    }
  
    setSubmit(true)

    setTimeout(() => {
      setcross(true);
    }, 2000);

    setTimeout(() => {
      setShowNextButton(true);
    }, 2000);
  }

  return (
    <div className='box'>
      <h1>React Quiz Test</h1><hr/>
        <h2>JSX stands for..</h2>
        <div className="cha" >
          <input
            type='radio'
            name="classname"
            onChange={(e) => setSelectedValue(e.target.value)}
            value="JavaSocial XML"
            disabled={submit}
          /><p> JavaSocial XML</p>
        </div>
        <div className="cha">
          <input type='radio'
            name="classname"
            onChange={(e) => setSelectedValue(e.target.value)}
            value="JavaScript EML"
            disabled={submit}
          /> <p>JavaScript EML</p>
        </div>
        <div className="cha">
          <input type='radio'
            name="classname"
            onChange={(e) => setSelectedValue(e.target.value)}
            value="JavaScript XML"
            disabled={submit}
          /> <p>JavaScript XML</p>
        </div>
        <div className="cha">
          <input type='radio'
            name="classname"
            onChange={(e) => setSelectedValue(e.target.value)}
            value="JevaScript XML"
            disabled={submit}
          /> <p>JevaScript XML</p>
        </div>
        <hr/>
        <div className="but">
        {!popup && (
        <button disabled={selectedValue === ''} onClick={onsubmitfunc} className="butt">Submit</button>
      )}
      { showNextButton &&
      <Link to="/2nd" className="butt1"><p>Next</p></Link>}
      </div>
        {
          <Pop popup={popup} setpopup={setpopup} selectedValue={selectedValue} cross={cross} />
        }
    </div>
  )
}

export default App
