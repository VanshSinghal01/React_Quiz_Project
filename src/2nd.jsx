import { useState } from "react"
import Pop2 from "./popup2";
import { Link } from "react-router-dom";


function two() {

    const [selectedValue, setSelectedValue] = useState('');
    const [popup, setpopup] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [showNextButton, setShowNextButton] = useState(false);
    const [cross, setcross] = useState(false)

    const onsubmitfunc = () => {
        if (selectedValue == 'npm init') {
            setpopup(true)
        }
        else {
            setpopup(true)
        }
        setSubmit(true)

        setTimeout(() => {
            setShowNextButton(true);
          }, 2000);
    }

    return (
        <div className='box'>
            <h1>React Quiz Test</h1><hr />
            <h2> How to set npm in our project?</h2>
            <div className="cha" >
                <input
                    type='radio'
                    name="classname"
                    onChange={(e) => setSelectedValue(e.target.value)}
                    value="npm-e"
                    disabled={submit}
                /><p> npm-e</p>
            </div>
            <div className="cha">
                <input type='radio'
                    name="classname"
                    onChange={(e) => setSelectedValue(e.target.value)}
                    value="npm init"
                    disabled={submit}
                /> <p>npm init</p>
            </div>
            <div className="cha">
                <input type='radio'
                    name="classname"
                    onChange={(e) => setSelectedValue(e.target.value)}
                    value="npm i react"
                    disabled={submit}
                /> <p>npm i react</p>
            </div>
            <div className="cha">
                <input type='radio'
                    name="classname"
                    onChange={(e) => setSelectedValue(e.target.value)}
                    value="npx init"
                    disabled={submit}
                /> <p>npx init</p>
            </div>
            <hr />
            <div className="but">
                {!popup && !submit && (
                    <button disabled={selectedValue === ''} onClick={onsubmitfunc} className="butt">Submit</button>
                )}
                { showNextButton &&(
                <Link to="/3rd" className="butt1"><p>Next</p></Link>
                )}
            </div>
            {
                <Pop2 popup={popup} setpopup={setpopup} selectedValue={selectedValue} cross={cross}  />
            }
        </div>
    )
}

export default two
