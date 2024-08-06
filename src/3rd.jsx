import { useState } from "react"
import Pop3 from "./popup3";
import { Link } from "react-router-dom";


function three() {

    const [selectedValue, setSelectedValue] = useState('');
    const [popup, setpopup] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [cross, setcross] = useState(false)

    const onsubmitfunc = () => {
        if (selectedValue == 'Inside curly braces') {
            setpopup(true)
        }
        else {
            setpopup(true)
        }
        setSubmit(true) 
    }

    return (
        <div className='box'>
            <h1>React Quiz Test</h1><hr />
            <h2>In JSX, how do you express JavaScript variables?</h2>
            <div className="cha" >
                <input
                    type='radio'
                    name="classname"
                    onChange={(e) => setSelectedValue(e.target.value)}
                    value="Inside curly braces"
                    disabled={submit}
                /><p>Inside curly braces</p>
            </div>
            <div className="cha">
                <input type='radio'
                    name="classname"
                    onChange={(e) => setSelectedValue(e.target.value)}
                    value="Inside square brackets"
                    disabled={submit}
                /> <p>Inside square brackets</p>
            </div>
            <div className="cha">
                <input type='radio'
                    name="classname"
                    onChange={(e) => setSelectedValue(e.target.value)}
                    value="Inside parentheses"
                    disabled={submit}
                /> <p>Inside parentheses</p>
            </div>
            <div className="cha">
                <input type='radio'
                    name="classname"
                    onChange={(e) => setSelectedValue(e.target.value)}
                    value="Inside single quotes"
                    disabled={submit}
                /> <p>Inside single quotes</p>
            </div>
            <hr />
            <div className="but">
                {!popup && !submit && (
                    <button disabled={selectedValue === ''} onClick={onsubmitfunc} className="butt">Submit</button>
                )}
            </div>
            {
                <Pop3 popup={popup} setpopup={setpopup} selectedValue={selectedValue} cross={cross}  />
            }
        </div>
    )
}

export default three
